import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Paper, Typography } from "@mui/material";
import BAFooter from "../layout/BAFooter";
import BAHeader from "../layout/BAHeader";
import { getData } from "../config/firebasemethods";

const QuestionDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [question, setQuestion] = useState<any>(null);
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const questionData = await getData("questions", id);
        console.log("Question Data:", questionData); 
        setQuestion(questionData);
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };
    fetchQuestion();
  }, [id]);

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BAHeader />
      <Box className="container p-3">
        <Paper className="p-4 bg-light m-3">
        <Typography className="fs-4 fw-bold">{question.question}</Typography>
        </Paper>
      </Box>
      <BAFooter />
    </>
  );
};

export default QuestionDetails;
