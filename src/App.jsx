import React from "react";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Products from "./pages/products";

function App() {
  return (
    <BrowserRouter>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
