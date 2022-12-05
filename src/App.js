import React from "react";
import Nav_bar from "./components/Navbar";
import Footer from "./components/Footer";
import { IKImage /*, IKContext, IKUpload */ } from "imagekitio-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import MainPage from "./pages/index";
import AboutPage from "./pages/about";

const urlEndpoint = "https://ik.imagekit.io/4s0yrabzrtp/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
