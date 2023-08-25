import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedProducts from "../components/FeaturedProducts";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <FeaturedProducts />
      <Accordion />
    </>
  );
}

export default Home;
