import { Box, Typography } from "@mui/material";
import BAButton from "../comonents/BAButton";
import { useNavigate } from "react-router-dom";

export default function BAHeader() {
  const navigate = useNavigate();

  return (
    <>
      <Box className="bg-dark text-white">
        <Box className="container py-5 d-flex justify-content-between align-items-center">
          <Typography className="fs-1">MAAZ QUE</Typography>
          <BAButton
            onClick={() => {
              navigate("/askquestion");
            }}
            label="Ask Question"
          />
        </Box>
      </Box>
    </>
  );
}
