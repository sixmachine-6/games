import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hangman from "./pages/Hangman";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hangman" element={<Hangman />} />
      </Routes>
    </BrowserRouter>
  );
}
