import { Trophy, Star } from "lucide-react";
import { users } from "@/models/server/config";
import { Models, Query } from "node-appwrite";
import { UserPrefs } from "@/store/Auth";
import convertDateToRelativeTime from "@/utils/relativeTime";
import { avatars } from "@/models/client/config";

export default async function LeaderBoardPage() {
      const topUsers = await users.list<UserPrefs>();
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4 flex flex-col items-center">
      <section className="w-full max-w-2xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Leaderboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Meet our top contributors and community champions!
          </p>
        </div>
        <div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Trophy size={20} className="text-yellow-500" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Top Contributors
        </h2>
      </div>

      <div className="space-y-4">
        {topUsers.users.map((user, index) => (
          <div
            key={user.$id}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
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
                <span className="text-gray-300 dark:text-gray-600">•</span>
              </div>
            </div>
          </div>
        ))}
      </div></div>
        </div>
      </section>
    </main>
  );
}