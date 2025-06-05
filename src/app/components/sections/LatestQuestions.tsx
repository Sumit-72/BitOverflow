import React from 'react';
import { ArrowRight } from 'lucide-react';
import TopContributors from './TopContributers';
import {
  answerCollection,
  db,
  questionCollection,
  voteCollection,
} from "@/models/name";
import { databases, users } from "@/models/server/config";
import { UserPrefs } from "@/store/Auth";
import { Query } from "node-appwrite";
import LatestQuestionCard from '../ui/LatestQuestionCard';
import Link from 'next/link';

export const dynamic = "force-dynamic";

const LatestQuestions: React.FC = async () => {

  const { documents: docs } = await databases.listDocuments(db, questionCollection, [
        Query.limit(5),
        Query.orderDesc("$createdAt"),
      ]);
    
      const questions = await Promise.all(
        docs.map(async (ques) => {
          const [author, answers, votes] = await Promise.all([
            users.get<UserPrefs>(ques.authorId),
            databases.listDocuments(db, answerCollection, [
              Query.equal("questionId", ques.$id),
              Query.limit(1),
            ]),
            databases.listDocuments(db, voteCollection, [
              Query.equal("type", "question"),
              Query.equal("typeId", ques.$id),
              Query.limit(1),
            ]),
          ]);
    
          return {
            ...ques,
            totalAnswers: answers.total,
            totalVotes: votes.total,
            author: {
              $id: author.$id,
              reputation: author.prefs.reputation,
              name: author.name,
            },
          };
        })
      );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow space-y-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Questions</h2>
              <Link
                href="/questions"
                className="flex items-center text-blue-600 hover:underline dark:text-blue-400"
              >
                View All <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {questions.map((question) => (
                <LatestQuestionCard key={question.$id} ques={question} />
              ))}
            </div>
          </div>

          <div className="lg:w-80 flex-shrink-0">
            <TopContributors />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestQuestions;