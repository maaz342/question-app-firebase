import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllQuestion from "../pages/allquestion";
import AskQuestion from "../pages/askquestion";
import Question from "../pages/question";

export default function AppRoute(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<AllQuestion />} />
        <Route path="askquestion" element={<AskQuestion />} />
        <Route path="question/:id" element={<Question />} />
    </Routes>
    </BrowserRouter>
    </>
}