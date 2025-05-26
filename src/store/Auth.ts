import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

import {AppwriteException, ID, Models, OAuthProvider} from "appwrite"
import { account } from "@/models/client/config";


export interface UserPrefs {
  reputation: number
}

interface IAuthStore {
  session: Models.Session | null;
  jwt: string | null
  user: Models.User<UserPrefs> | null
  hydrated: boolean

  setHydrated(): void;
  verfiySession(): Promise<void>;
  login(
    email: string,
    password: string
  ): Promise<
  {
    success: boolean;
    error?: AppwriteException| null
  }>
  createAccount(
    name: string,
    email: string,
    password: string
  ): Promise<
  {
    success: boolean;
    error?: AppwriteException| null
  }>
  logout(): Promise<void>
  loginWithOAuth(provider: string, successUrl?: string, failureUrl?: string): void;
  updateProfile(
    params: {
      name?: string;
      email?: string;
      oldPassword?: string;
      newPassword?: string;
    }
  ): Promise<{
    success: boolean;
    error?: AppwriteException | null;
  }>;
  recoverPassword(
    email: string,
    redirectUrl?: string
  ): Promise<{
    success: boolean;
    error?: AppwriteException | null;
  }>;

}

// Utility function for email validation
function isValidEmail(email: string): boolean {
  // Simple regex for email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// function isValidEmail(email: string): boolean {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)*bitmesra\.ac\.in$/;
//   return emailRegex.test(email);
// }


export const useAuthStore = create<IAuthStore>()(
  persist(
    immer((set) => ({
      session: null,
      jwt: null,
      user: null,
      hydrated: false,

      setHydrated() {
        set({hydrated: true})
      },

      async verfiySession() {
        try {
          const session = await account.getSession("current")
          if (session.provider) {
          console.log("OAuth Provider:", session.provider);
          console.log("Provider UID:", session.providerUid);
          console.log("Provider Access Token:", session.providerAccessToken);
        }
          set({session})

        } catch (error) {
          console.log(error)
        }
      },

      async login(email: string, password: string) {
        if (!isValidEmail(email)) {
          return {
            success: false,
            error: new AppwriteException("Invalid email format")
          }
        }
        try {
          const session = await account.createEmailPasswordSession(email, password)
          const [user, {jwt}] = await Promise.all([
            account.get<UserPrefs>(),
            account.createJWT()
          ])

          // Check if user is verified
          if (!user.emailVerification) {
            // Logout immediately if not verified
            await account.deleteSession(session.$id);
            return {
              success: false,
              error: new AppwriteException("Please verify your email before logging in.")
            }
          }

          if (!user.prefs?.reputation) await account.updatePrefs<UserPrefs>({
            reputation: 0
          })

          set({session, user, jwt})
          return { success: true }

        } catch (error) {
          console.log(error)
          return {
            success: false,
            error: error instanceof AppwriteException ? error: null,
            
          }
        }
      },

      async createAccount(name: string, email: string, password: string) {
        if (!isValidEmail(email)) {
          return {
            success: false,
            error: new AppwriteException("Invalid email format")
          };
        }
        try {
          await account.create(ID.unique(), email, password, name);

          // 🔐 Create a temporary session to promote user from 'guest' to 'user'
          await account.createEmailPasswordSession(email, password);

          // ✅ Now user is authenticated and can request verification
          await account.createVerification("http://localhost:3000/verify");

          // Optional: log them out again until they verify
          await account.deleteSessions();

          return { success: true };
        } catch (error) {
          console.log(error);
          return {
            success: false,
            error: error instanceof AppwriteException ? error : null,
          };
        }
      },

      async logout() {
        try {
          // Optional: check if the user is logged in
          await account.get(); // Throws if not logged in

          // If no error above, user is logged in
          await account.deleteSessions();
        } catch (error: any) {
          if (error.code === 401) {
            // Already logged out or not logged in
            console.warn("No active session to delete.");
          } else {
            console.error("Logout failed:", error);
          }
        } finally {
          // Always clean up local state
          set({ session: null, jwt: null, user: null });
          localStorage.removeItem("auth");
        }
      },

      loginWithOAuth(provider: any, successUrl?: string, failureUrl?: string) {
        // You can set default URLs or use window.location.origin
        const success = successUrl || "http://localhost:3000/";
        const failure = failureUrl || "http://localhost:3000/leaderboard";
        account.createOAuth2Session(provider, success, failure);
        // This will redirect the user to the OAuth provider
      },

      async updateProfile({ name, email, oldPassword, newPassword }) {
        try {
          if (name) {
            await account.updateName(name);
          }
          // Email update is intentionally disabled
          // if (email && oldPassword) {
          //   await account.updateEmail(email, oldPassword);
          // }
          if (newPassword && oldPassword) {
            await account.updatePassword(newPassword, oldPassword);
          }
          // Refresh user data after update
          const user = await account.get<UserPrefs>();
          set({ user });
          return { success: true };
        } catch (error) {
          console.log(error);
          return {
            success: false,
            error: error instanceof AppwriteException ? error : null,
          };
        }
      },

      async recoverPassword(email: string, redirectUrl?: string) {
        try {
          if (!isValidEmail(email)) {
            return {
              success: false,
              error: new AppwriteException("Invalid email format"),
            };
          }
          const url = redirectUrl || "http://localhost:3000/recovery";
          await account.createRecovery(email, url);
          return { success: true };
        } catch (error) {
          console.log(error);
          return {
            success: false,
            error: error instanceof AppwriteException ? error : null,
          };
        }
      },

    })),
    {
      name: "auth",
      onRehydrateStorage(){
        return (state, error) => {
          if (!error) state?.setHydrated()
        }
      }
    }
  )
)