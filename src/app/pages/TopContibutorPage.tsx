import { Trophy, Star } from "lucide-react";
import { users } from "@/models/server/config";
import { Query } from "node-appwrite";
import { UserPrefs } from "@/store/Auth";
import { avatars } from "@/models/client/config";

export default async function TopContributorsPage() {
  const topUsers = await users.list<UserPrefs>([Query.limit(20)]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-8">
            <Trophy size={28} className="text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Top Contributors
            </h2>
          </div>
          <div className="w-full max-w-2xl space-y-4">
            {topUsers.users.map((user, index) => (
              <div
                key={user.$id}
                className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="relative">
                  <img
                    src={avatars.getInitials(user.name, 48, 48).href}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {index === 0 && (
                    <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full p-1">
                      <Star size={12} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      {user.prefs.reputation.toLocaleString()} rep
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}