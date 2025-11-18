import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Modulo1 from "./pages/Modulo1";

import Retrovisor1 from "./pages/Retrovisor1";
import Retrovisor2 from "./pages/Retrovisor2";
import Parada1 from "./pages/Parada1";
import Parada2 from "./pages/Parada2";

import Quiz1 from "./pages/Quiz1";
import Quiz2 from "./pages/Quiz2";

// App principal com Provider
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Modulo1 />} />
        <Route path="/parada1" element={<Parada1 />} />
        <Route path="/retrovisor1" element={<Retrovisor1 />} />
        <Route path="/quiz1" element={<Quiz1 />} />
        <Route path="/parada2" element={<Parada2 />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/retrovisor2" element={<Retrovisor2 />} />
      </Routes>
    </Router>
  );
}

export default App;
