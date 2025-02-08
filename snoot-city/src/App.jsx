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
        <div className="bg-background-primary">
          <div className="flex flex-col mx-auto max-w-[1280px]">
            <NavBar />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/petinfo/:id" element={<PetInfo />} />
              </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
