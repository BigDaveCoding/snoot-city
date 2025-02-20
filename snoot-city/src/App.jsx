import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { StrictMode, useState } from "react";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import PetInfo from "./pages/PetInfo"
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import LearnAboutSighthounds from "./pages/LearnAboutSighthounds";

function App() {

  const [manualNavigation, setManualNavigation] = useState(false)

  return (
    <StrictMode>
      <BrowserRouter>
        <div className="bg-background-primary">
          <div className="flex flex-col mx-auto max-w-[1280px]">
            <NavBar setManualNavigation={setManualNavigation} />
              <Routes>
                <Route path="/" element={<Homepage manualNavigation={manualNavigation} setManualNavigation={setManualNavigation} />} />
                <Route path="/about" element={<About />} />
                <Route path="/petinfo/:id" element={<PetInfo />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about/learnaboutsighthounds" element={<LearnAboutSighthounds />} />
              </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
