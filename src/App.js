import React from "react";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
