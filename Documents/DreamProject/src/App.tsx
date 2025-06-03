import React from "react";
import { Routes, Route } from "react-router-dom";
import DreamMain from "./pages/DreamMain";
import DreamForm from "./pages/DreamForm";
import DreamComplete from "./pages/DreamComplete";
import Fortune from "./pages/Fortune";
import FortuneComplete from "./pages/FortuneComplete";
import SoloFortune from "./pages/SoloFortune";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<DreamMain />} />
        <Route path="/dream-form/:type/:category" element={<DreamForm />} />
        <Route path="/dream-complete" element={<DreamComplete />} />
        <Route path="/fortune/:type" element={<Fortune />} />
        <Route path="/fortune-complete" element={<FortuneComplete />} />
        <Route path="/solo-fortune" element={<SoloFortune />} />
      </Routes>
    </div>
  );
}

export default App;
