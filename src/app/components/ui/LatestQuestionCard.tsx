// import React from "react";
// import Link from "next/link";
// import { Models } from "appwrite";
// import slugify from "@/utils/slugify";
// import { avatars } from "@/models/client/config";
// import convertDateToRelativeTime from "@/utils/relativeTime";

// interface QuestionCardProps {
//   ques: Models.Document & {
//     totalAnswers: number;
//     totalVotes: number;
//     author: {
//       $id: string;
//       name: string;
//       reputation: number;
//     };
//   };
// }

// const QuestionCard: React.FC<QuestionCardProps> = ({ ques }) => {
//   return (
//     <div className="p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col group">
//       {/* Stats */}
//       <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg w-fit mb-6 group-hover:bg-orange-100 dark:group-hover:bg-orange-800/20 transition-colors text-sm text-gray-700 dark:text-gray-300">
//         <p className="leading-tight">{ques.totalVotes} votes</p>
//         <p className="leading-tight">{ques.totalAnswers} answers</p>
//       </div>

//       {/* Title */}
//       <Link
//         href={`/questions/${ques.$id}/${slugify(ques.title)}`}
//         className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
//       >
//         <h3 className="text-xl font-semibold mb-3 line-clamp-2">{ques.title}</h3>
//       </Link>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-2 mb-4 text-sm">
//         {ques.tags.map((tag: string) => (
//           <Link
//             key={tag}
//             href={`/questions?tag=${tag}`}
//             className="inline-block rounded-lg bg-white/10 px-2 py-0.5 text-gray-600 dark:text-gray-300 hover:bg-white/20 transition"
//           >
//             #{tag}
//           </Link>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-2">
//         <div className="flex items-center gap-2">
//           <img
//             src={avatars.getInitials(ques.author.name, 24, 24).href}
//             alt={ques.author.name}
//             className="w-6 h-6 rounded-lg"
//           />
//           <Link
//             href={`/users/${ques.author.$id}/${slugify(ques.author.name)}`}
//             className="text-orange-500 hover:text-orange-600"
//           >
//             {ques.author.name}
//           </Link>
//           <span className="text-xs">({ques.author.reputation})</span>
//         </div>
//         <span className="text-xs sm:text-sm">asked {convertDateToRelativeTime(new Date(ques.$createdAt))}</span>
//       </div>
//     </div>
//   );
// };

// export default QuestionCard;
import React from 'react';

type QuestionProps = {
  question: {
    id: number;
    title: string;
    description: string;
    author: string;
    votes: number;
    answers: number;
    tags: string[];
    createdAt: string;
  };
};

const QuestionCard: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-gray-800">
      <div className="flex items-start justify-between">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
            <a href={`/question/${question.id}`}>{question.title}</a>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {question.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {question.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 dark:text-gray-400">
            {question.votes} votes
          </span>
          <span className="text-gray-600 dark:text-gray-400">
            {question.answers} answers
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400 mr-2">
            asked {question.createdAt}
          </span>
          <span className="text-blue-600 dark:text-blue-400">
            {question.author}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

