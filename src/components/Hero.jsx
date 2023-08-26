import React from "react";

function Hero() {
  return (
    // Moved navbar here to ensure the screen size good
    <div className="min-h-screen bg-red mb-5">
      <div id="hero" className="hero-content m-auto mt-10 flex-col lg:flex-row-reverse lg:px-16">
        <img
          src="https://s3-alpha-sig.figma.com/img/fede/eda5/ab3f1bc7d169d3a2f5cda188dd6c9272?Expires=1693785600&Signature=dBjWQmn0PhPyoxJqMiIZWLQPRy7IiPxlujKxHZRZGzzDwhiSsLtExnQg5cTwQ5WNThjOy7d6yyHe1RP2Tz9Nn~AVFuVXhWAE5YpnNZ7x6m-IUYcf730VQesH~1PXir97caPb-OvVRMBOOCopb1wsayfoBJx2mTy35VeCr2L1d5UsHDXI5-ZEe75M5DgWIr9KaR4WyAi~e~jyi9I5pHHg2uPzjawlZkhe8uPqVlOG~-zGSU18VYTV0T-LMPjko2ShRJfdKRTqBiQZcvAr7jEkiZSRerNm7QvDNt0AnsJI21~waPsplEJkzDIKX0mwLcXoso7z9~N9B7E1OIvteQu4EA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          className="lg:max-w-[650px]"
        />
        <div>
          <h1 className="text-3xl lg:text-7xl font-bold">Your Trusted Cleanliness Partner</h1>
          <p className="text-xs lg:text-base py-4 text-slate-400 font-light lg:mb-11">
            Discover the art of effortless cleanliness with Griya Cipta Abadi! Your local partner for all things clean, from top-notch cleaning chemicals to essential hygiene companions like trash bags, gloves, and more. We've got your back
            for a pristine environment.
          </p>
          <a target="__blank" href="https://wa.me/08111927302?text=Hi%20I'm%20interested%20with%20your%20products!" className="text-xs lg:text-base bg-blue-600 text-white px-6 py-3 rounded-2xl">
            Order Now!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
