import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { StrictMode } from "react";
import About from "./pages/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
