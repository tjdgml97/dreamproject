import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DreamInterpretation from "./pages/DreamInterpretation";
import DreamResult from "./pages/DreamResult";
import DreamSubmissionComplete from "./pages/DreamSubmissionComplete";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interpret" element={<DreamInterpretation />} />
        <Route path="/result" element={<DreamResult />} />
        <Route path="/complete" element={<DreamSubmissionComplete />} />
      </Routes>
    </Layout>
  );
}

export default App;
