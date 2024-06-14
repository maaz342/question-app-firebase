import { Box } from "@mui/material";
import "./App.css";
import AppRoute from "./config/approute";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Box
      sx={{ backgroundColor: "#e3d5ca", height: "100%", minHeight: "100vh" }}
    >
      <AppRoute />
    </Box>
  );
}

export default App;