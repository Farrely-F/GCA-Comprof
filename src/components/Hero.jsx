function Hero() {
  return (
    // Moved navbar here to ensure the screen size good
    <div className="mb-40">
      <div id="hero" className="hero-content m-auto mt-10 flex-col lg:flex-row-reverse md:px-16" data-aos="zoom-in" data-aos-once="true" data-aos-delay="500">
        <img src="https://aroosand.sirv.com/GCA%20Website/Hero%20Image.png" className="lg:max-w-[600px]" />
        <div className="relative">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Your Trusted Cleanliness Partner</h1>
          <p className="text-xs md:text-base py-4 text-slate-400 font-light lg:mb-11">
            Discover the art of effortless cleanliness with Griya Cipta Abadi! Your local partner for all things clean, from top-notch cleaning chemicals to essential hygiene companions like trash bags, gloves, and more. We&apos;ve got your
            back for a pristine environment.
          </p>
          <a
            target="__blank"
            href="https://wa.me/08111927302?text=Hi%20I'm%20interested%20with%20your%20products!"
            className="text-xs lg:text-base bg-blue-700 hover:bg-blue-600 hover:shadow-lg absolute hover:-translate-y-2 transition-all text-white px-6 py-3 rounded-2xl"
          >
            Order Now!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
