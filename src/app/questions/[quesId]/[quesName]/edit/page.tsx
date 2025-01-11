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
    const question = await databases.getDocument(db, questionCollection, params.quesId);

    return <EditQues question={question} />;
};

export default Page;
