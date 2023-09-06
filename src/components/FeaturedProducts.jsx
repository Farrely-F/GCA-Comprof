import { Link } from "react-router-dom";

function FeaturedProducts() {
  return (
    <div className="flex flex-col my-40" data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
      <h2 className="text-center text-3xl font-medium">Featured Products</h2>
      <p className="text-center text-slate-400 font-normal mb-10">There are our main products</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 justify-items-center mb-10 md:px-16">
        <div className="flex flex-col items-center w-fit gap-y-5 ">
          <div className="bg-[linear-gradient(to_right,rgba(0,34,154,0.8),rgba(112,119,190,0.5)),url('https://aroosand.sirv.com/GCA%20Website/Featured%201.jpg')] w-36 h-28 md:w-60 md:h-52 lg:w-52 bg-cover rounded-3xl hover:scale-105 transition ease-out duration-300 hover:animate-pulse" />
          <p>Janitorial Support</p>
        </div>
        <div className="flex flex-col items-center w-fit gap-y-5">
          <div className="bg-[linear-gradient(to_right,rgba(0,34,154,0.8),rgba(112,119,190,0.5)),url('https://aroosand.sirv.com/GCA%20Website/Featured%202.jpg')] w-36 h-28 md:w-60 md:h-52 lg:w-52 bg-cover rounded-3xl hover:scale-105 transition ease-out duration-300 hover:animate-pulse" />
          <p>Plastic Wares</p>
        </div>
        <div className="flex flex-col items-center w-fit gap-y-5">
          <div className="bg-[linear-gradient(to_right,rgba(0,34,154,0.8),rgba(112,119,190,0.5)),url('https://aroosand.sirv.com/GCA%20Website/Featured%203.jpg')] w-36 h-28 md:w-60 md:h-52 lg:w-52 bg-cover rounded-2xl hover:scale-105 transition ease-out duration-300 hover:animate-pulse" />
          <p>Packaging</p>
        </div>
        <div className="flex flex-col items-center w-fit gap-y-5">
          <div className="bg-[linear-gradient(to_right,rgba(0,34,154,0.8),rgba(112,119,190,0.5)),url('https://aroosand.sirv.com/GCA%20Website/Featured%204.jpg')] w-36 h-28 md:w-60 md:h-52 lg:w-52 bg-cover rounded-2xl hover:scale-105 transition ease-out duration-300 hover:animate-pulse" />
          <p>Hygiene Products</p>
        </div>
      </div>
      <div className="group mx-auto px-5 py-2 rounded-2xl text-white bg-blue-700 transition ease-out duration-300 hover:animate-pulse">
        <Link to="/products">See More</Link>
        <svg className="fill-white ml-2 scale-0 hidden group-hover:scale-100 group-hover:inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default FeaturedProducts;
