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
          <Link href={`/questions/${ques.$id}/${slugify(ques.title)}`}>{ques.title}</Link>
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
        <div className="ml-auto flex items-center gap-1">
          <picture>
              <img
                  src={avatars.getInitials(ques.author.name, 24, 24).href}
                  alt={ques.author.name}
                  className="rounded-lg"
              />
          </picture>
          <Link
              href={`/users/${ques.author.$id}/${slugify(ques.author.name)}`}
              className="text-orange-500 hover:text-orange-600"
          >
              {ques.author.name}
          </Link>
          <strong>&quot;{ques.author.reputation}&quot;</strong>
        </div>
      </div>
    </div>
  </div>
);
};

export default LatestQuestionCard;