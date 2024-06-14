import { Box } from "@mui/material";
import BAFooter from "../layout/BAFooter";
import BAHeader from "../layout/BAHeader";
import BATextarea from "../comonents/BATextarea";
import BAButton from "../comonents/BAButton";
import { useState } from "react";
import { sendData } from "../config/firebasemethods";

export default function AskQuestion() {
  const [question, setQuestion] = useState("");

  const addData = () => {
    let obj = {
      question: question,
      createdAt: JSON.stringify(new Date()),
    };

    sendData("questions", obj);
  };

  return (
    <>
      <BAHeader />
      <Box className="container p-3">
        <Box>
          <BATextarea
            value={question}
            onChange={(e: any) => {
              setQuestion(e.target.value);
            }}
            label="Ask Question"
          />
          <Box className="py-3">
            <BAButton onClick={addData} label="Submit" />
          </Box>
        </Box>
      </Box>
      <BAFooter />
    </>
  );
}
