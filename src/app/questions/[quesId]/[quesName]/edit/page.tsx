import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import React from "react";
import EditQues from "./EditQues";
import { NextPage } from "next";

const Page: NextPage<{ params: { quesId: string; quesName: string } }> = async ({ params }) => {
    const {quesId} = await params;
  try {
    const question = await databases.getDocument(db, questionCollection, quesId);

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


