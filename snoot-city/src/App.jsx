import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { StrictMode } from "react";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import PetInfo from "./pages/PetInfo"
import Footer from "./components/Footer";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/petinfo/:id" element={<PetInfo />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
