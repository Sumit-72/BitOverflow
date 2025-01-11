import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import React from "react";
import EditQues from "./EditQues";

interface Params {
  params: {
    quesId: string;
    quesName: string;
  };
}

const Page = async ({ params }: Params) => {
  try {
    const question = await databases.getDocument(db, questionCollection, params.quesId);

    // Check if the question exists
    if (!question) {
      return <div>Question not found</div>; // Handle case when question does not exist
    }

    return <EditQues question={question} />;
  } catch (error) {
    console.error("Error fetching question:", error);
    return <div>Error loading question</div>; // Handle errors gracefully
  }
};

export default Page;

