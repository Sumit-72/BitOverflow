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
}


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
          set({session})

        } catch (error) {
          console.log(error)
        }
      },

      async login(email: string, password: string) {
        try {
          const session = await account.createEmailPasswordSession(email, password)
          const [user, {jwt}] = await Promise.all([
            account.get<UserPrefs>(),
            account.createJWT()

          ])
          if (!user.prefs?.reputation) await account.updatePrefs<UserPrefs>({
            reputation: 0
          })

          set({session, user, jwt})
          
          return { success: true}

        } catch (error) {

          console.log(error)
          return {
            success: false,
            error: error instanceof AppwriteException ? error: null,
            
          }
        }
      },

      async createAccount(name:string, email: string, password: string) {
        try {
          await account.create(ID.unique(), email, password, name)
          return {success: true}
        } catch (error) {
          console.log(error)
          return {
            success: false,
            error: error instanceof AppwriteException ? error: null,
            
          }
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
        const success = successUrl || window.location.origin;
        const failure = failureUrl || window.location.origin + "/login?error=oauth";
        account.createOAuth2Session(provider, success, failure);
        // This will redirect the user to the OAuth provider
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