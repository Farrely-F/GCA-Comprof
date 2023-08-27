import React from "react";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/about";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Products from "./pages/products";
import NotFound from "./pages/404";

function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
