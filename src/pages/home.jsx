import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedProducts from "../components/FeaturedProducts";
import Accordion from "../components/Accordion";

function Home() {
  return (
    <>
      <Hero />
      <Banner
        title="Elevate Your Cleanliness With GCA Excellence!"
        description="At GCA, we're not just in the business of cleaning – we're in the business of elevating cleanliness to an art form. Our mission is to deliver nothing short of excellence in every cleaning solution we provide."
        cta="Learn More"
        variant="mr-2 border-b-white hover:border-b-2"
        url="/about"
      />
      <FeaturedProducts />
      <Accordion />
    </>
  );
}

export default Home;
