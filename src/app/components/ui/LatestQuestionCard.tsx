import React from "react";
import Link from "next/link";
import { Models } from "appwrite";
import slugify from "@/utils/slugify";
import { avatars } from "@/models/client/config";
import convertDateToRelativeTime from "@/utils/relativeTime";


interface LatestQuestionCardProps {
  ques: Models.Document & {
    totalAnswers: number;
    totalVotes: number;
    author: {
      $id: string;
      name: string;
      reputation: number;
    };
  };
}

const LatestQuestionCard: React.FC<LatestQuestionCardProps> = ({ ques }) => {
return (
  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-gray-800">
    <div className="flex items-start justify-between">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
          <a href={`/question/${ques.$id}`}>{ques.title}</a>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {ques.content}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {ques.tags.map((tag: string) => (
            <Link
              key={tag}
              href={`/questions?tag=${tag}`}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 dark:text-gray-400">
          {ques.totalVotes} votes
        </span>
        <span className="text-gray-600 dark:text-gray-400">
          {ques.totalAnswers} answers
        </span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-600 dark:text-gray-400 mr-2">
          asked {convertDateToRelativeTime(new Date(ques.$createdAt))}
        </span>
        <span className="text-blue-600 dark:text-blue-400">
          {ques.author.name}
        </span>
      </div>
    </div>
  </div>
);
};

export default LatestQuestionCard;


































// // export default QuestionCard;
// import React from 'react';

// type QuestionProps = {
//   question: {
//     id: number;
//     title: string;
//     description: string;
//     author: string;
//     votes: number;
//     answers: number;
//     tags: string[];
//     createdAt: string;
//   };
// };

// const QuestionCard: React.FC<QuestionProps> = ({ question }) => {
//   return (
//     <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-gray-800">
//       <div className="flex items-start justify-between">
//         <div className="flex-grow">
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
//             <a href={`/question/${question.id}`}>{question.title}</a>
//           </h3>
//           <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
//             {question.description}
//           </p>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {question.tags.map((tag) => (
//               <span 
//                 key={tag}
//                 className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-between text-sm">
//         <div className="flex items-center space-x-4">
//           <span className="text-gray-600 dark:text-gray-400">
//             {question.votes} votes
//           </span>
//           <span className="text-gray-600 dark:text-gray-400">
//             {question.answers} answers
//           </span>
//         </div>
//         <div className="flex items-center">
//           <span className="text-gray-600 dark:text-gray-400 mr-2">
//             asked {question.createdAt}
//           </span>
//           <span className="text-blue-600 dark:text-blue-400">
//             {question.author}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };