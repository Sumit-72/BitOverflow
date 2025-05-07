import { Trophy, Star } from "lucide-react";
import { users } from "@/models/server/config";
import { Models, Query } from "node-appwrite";
import { UserPrefs } from "@/store/Auth";
import convertDateToRelativeTime from "@/utils/relativeTime";
import { avatars } from "@/models/client/config";
import Image from "next/image";

export default async function TopContributors() {
  const topUsers = await users.list<UserPrefs>([Query.limit(5)]);

  return (
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
      </div>

      <button className="w-full mt-6 py-2 text-center text-blue-600 dark:text-blue-400 hover:underline text-sm">
        View All Contributors
      </button>
    </div>
  );
}


// // // import { cn } from "@/lib/utils";

// // import { AnimatedList } from "@/components/magicui/animated-list";
// import { users } from "@/models/server/config";
// import { Models, Query } from "node-appwrite";
// import { UserPrefs } from "@/store/Auth";
// import convertDateToRelativeTime from "@/utils/relativeTime";
// import { avatars } from "@/models/client/config";

// // const Notification = ({ user }: { user: Models.User<UserPrefs> }) => {
// //     return (
// //         // <figure
// //         //     className={cn(
// //         //         "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
// //         //         // animation styles
// //         //         "transition-all duration-200 ease-in-out hover:scale-[103%]",
// //         //         // light styles
// //         //         "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
// //         //         // dark styles
// //         //         "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
// //         //     )}
// //         //>
// //             <div className="flex flex-row items-center gap-3 w-[30vw] relative">
// //                 <picture>
// //                     <img
// //                         src={avatars.getInitials(user.name, 40, 40).href}
// //                         alt={user.name}
// //                         className="rounded-2xl"
// //                     />
// //                 </picture>
// //                 <div className="flex flex-col overflow-hidden">
// //                     <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
// //                         <span className="text-sm sm:text-lg">{user.name}</span>
// //                         <span className="mx-1">·</span>
// //                         <span className="text-xs text-gray-500">
// //                             {convertDateToRelativeTime(new Date(user.$updatedAt))}
// //                         </span>
// //                     </figcaption>
// //                     <p className="text-sm font-normal dark:text-white/60">
// //                         <span>Reputation</span>
// //                         <span className="mx-1">·</span>
// //                         <span className="text-xs text-gray-500">{user.prefs.reputation}</span>
// //                     </p>
// //                 </div>
// //             </div>
// //         //</figure>
// //     );
// // };

// export default async function TopContributers() {
//     const topUsers = await users.list<UserPrefs>([Query.limit(10)]);

//     return (
//         <div className="bg-background relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg bg-white/10 p-6 shadow-lg">
//            {topUsers.users.map(user => (
//                     <Notification user={user} key={user.$id} />
//                 ))}
//         </div>
//     );
// }

// import React from 'react';
// import { Trophy, Star } from 'lucide-react';

// const TopContributors: React.FC = () => {
//   const contributors = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       reputation: 15420,
//       contributions: 234,
//       avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       reputation: 12350,
//       contributions: 186,
//       avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
//     },
//     {
//       id: 3,
//       name: "Emily Davis",
//       reputation: 9870,
//       contributions: 156,
//       avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg"
//     }
//   ];

//   return (
//     <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-6">
//       <div className="flex items-center space-x-2 mb-6">
//         <Trophy size={20} className="text-yellow-500" />
//         <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
//           Top Contributors
//         </h2>
//       </div>

//       <div className="space-y-4">
//         {contributors.map((contributor, index) => (
//           <div 
//             key={contributor.id}
//             className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
//           >
//             <div className="relative">
//               <img 
//                 src={contributor.avatar} 
//                 alt={contributor.name}
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               {index === 0 && (
//                 <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full p-1">
//                   <Star size={12} className="text-white" />
//                 </div>
//               )}
//             </div>
            
//             <div className="flex-grow">
//               <h3 className="font-medium text-gray-900 dark:text-white">
//                 {contributor.name}
//               </h3>
//               <div className="flex items-center space-x-2 text-sm">
//                 <span className="text-gray-600 dark:text-gray-400">
//                   {contributor.reputation.toLocaleString()} rep
//                 </span>
//                 <span className="text-gray-300 dark:text-gray-600">•</span>
//                 <span className="text-gray-600 dark:text-gray-400">
//                   {contributor.contributions} contributions
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className="w-full mt-6 py-2 text-center text-blue-600 dark:text-blue-400 hover:underline text-sm">
//         View All Contributors
//       </button>
//     </div>
//   );
// };

// export default TopContributors;