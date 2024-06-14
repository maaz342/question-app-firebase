import React, { useEffect, useState } from 'react';
import { Box, Button, Paper, Typography } from "@mui/material";
import BAFooter from "../layout/BAFooter";
import BAHeader from "../layout/BAHeader";
import { useNavigate } from "react-router-dom";
import { getData } from "../config/firebasemethods";

export default function AllQuestion() {
  const [allQuestions, setAllQuestions] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questions = await getData("questions");
        setAllQuestions(questions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>

      <BAHeader />
      <Box className="container p-3">
        {allQuestions.map((question: any, index: number) => (
          <QuestionPaper
            key={index}
            question={question}
            navigate={navigate}
          />
        ))}
        
      </Box>
      <BAFooter />
    </>
  );
}


interface QuestionPaperProps {
  question: any;
  navigate: any;
}

const QuestionPaper: React.FC<QuestionPaperProps> = ({ question, navigate }) => {
  return (
    <Paper className="p-4 bg-light m-3 d-flex justify-content-between align-items-center">
      <div className="w-75">
        <Typography className="fs-4 fw-bold">{question.question}</Typography>
      </div>
      <div className="w-25 text-end">
        <Button onClick={() => navigate(`/question/${question.id}`)}>View Question</Button>
      </div>
    </Paper>
  );
};

