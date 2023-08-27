import React from "react";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  return (
    <div className="min-h-screen flex flex-col justify-center" data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
      <h2 className="text-center text-3xl font-medium">Featured Products</h2>
      <p className="text-center text-slate-400 font-normal mb-10">There are our main products</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 justify-items-center mb-10 md:px-16">
        <div className="flex flex-col items-center w-fit gap-y-5 ">
          <div className="bg-[linear-gradient(to_right,rgba(0,34,154,0.8),rgba(112,119,190,0.5)),url('https://s3-alpha-sig.figma.com/img/1281/9dda/8e7ce2851d77a47edaa4b810c7ecd9b6?Expires=1693785600&Signature=P-a7YiGgIYwbMySJRJklsq7QSsy-wSRy8XPHPqjvUiY1c2qbBs7CCTLmGXHIL~3d0FrR9r-juN9vK2vapPBfzHu6c49cLjGxvfPeKgwYkgX9ve3JOYD6TOh9GwuNwwRi9me~hvcq9laIBuHzFplATT-l0BrlBNhKaFYxmOJsCgUwBCIatMQAmw2ZQskRvXRRUWuq96qWScrPyOP2Tq-V7Qw9wYAokaI1gD2CrV0je34mCS1Jx0d07jAMrDqJBDokiTaCE1Jd2O7449TqMl1PDaUT71iDbxeQQxZbwBczAI4T4snZtAj4nWD0Y0nvJxCGZBPyXB-W-Syob4IB~ovNxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] w-40 h-28 md:w-60 md:h-52 bg-cover rounded-2xl hover:scale-105 transition ease-out duration-300 hover:animate-pulse" />
          <p>Janitorial Support</p>
        </div>
        <div className="flex flex-col items-center w-fit gap-y-5">
          <div className="bg-[linear-gradient(to_right,rgba(0,34,154,0.8),rgba(112,119,190,0.5)),url('https://s3-alpha-sig.figma.com/img/b804/60c6/f8504a2ff9550b5ceb24cac4bd8db7a6?Expires=1693785600&Signature=cF9auEK6NuLtFdVHTmBVv488OtdJITW9qe99HJAcAeNFkF-tJj6SqNHJvPyqtmsr-oKytcGNRunj0gTXhHq-QXluo-wS1YmfWRtaCSlzQjOZat6ctlZUevG9mPibbg1gMwrKzkmVboVl0knaSdrd4mhG8VPxAQUSh~Y8PMfT5~6nFRP2~1eiVkMulfNdEpfTFkOgoiFNL-V2Dg-Xu1Vix1QIOgNCXIdzEqhwS1Kdx4e7iF7QDERE8sXN98G35RTK31~lfdyROJpM-CuUBXU~shx070n~OK6YCsR2ixuvWQ4dtRGfPs~cfHX82u0k719XTWfFY90ZUNQMOXtm5etzUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] w-40 h-28 md:w-60 md:h-52 bg-cover rounded-2xl hover:scale-105 transition ease-out duration-300 hover:animate-pulse" />
          <p>Plastic Wares</p>
        </div>
        <div className="flex flex-col items-center w-fit gap-y-5">
          <div className="bg-[linear-gradient(to_right,rgba(0,34,154,0.8),rgba(112,119,190,0.5)),url('https://s3-alpha-sig.figma.com/img/6dc3/24b9/b0ce4d21b1bd6834aecb882487f6b57f?Expires=1693785600&Signature=BCl99CEB1Qjr2ecoBDX2JqQum1Bw3r7XtTzs58LTy2LTz9p~axPFr4oXW2wJrevYmwnMIXEX5FG9KEJds8i9VDmD4~0yxwdv5Pxsuee0siRxuKQQcadGY-FU9-RF-OV0oqCTL-cfcPagOemxuVD6oDh4o77HkY4KU18KwNEjZm6W2zl0gvHZFc699thTImY9gQwzjRgVn9TXhcaPTayrpD4q9CREI2XlC0qvzLkoVHbqtmoeA3~gyq7VVoKIhX2-MLkKap4hkEY9IZLPE924hEQMG9TlNTtyu5AWjP8v-XYYsDo16F~98b9yrh5hb6~YwBKbP7PjyADoreQcRUDu-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] w-40 h-28 md:w-60 md:h-52 bg-cover rounded-2xl hover:scale-105 transition ease-out duration-300 hover:animate-pulse" />
          <p>Packaging</p>
        </div>
        <div className="flex flex-col items-center w-fit gap-y-5">
          <div className="bg-[linear-gradient(to_right,rgba(0,34,154,0.8),rgba(112,119,190,0.5)),url('https://s3-alpha-sig.figma.com/img/1b05/3fcc/0509adf66249fc7635757b6b3908e9cf?Expires=1693785600&Signature=NSdz521wO5DnrPhICZBPcYLEFqbVpdLEx8SVTsAJcvrs0vgx5z46o3QB7-29MHqqE8rwsU3TFES91fF~pFUtu0sVz8NbrU8xQW7x6DOd-OvOzbkrxJqKlSi8Afi8bx~56rUzHz-KxX6UD~-dM5QvkF5c3t1-W2B6tnhqESE0keTMI6ALmbML9N5FMp8rOACi~s8b~k4UQQPJPFGu0O-nTfKVp3xOCnow7z19RfALHRSBI0A2ZsMs1dFtu~YxvWkH8fY7Hz6KRbQx-pfAYsF7o-eUKkf7oCE9Q8zvxcSsC-BEIF6bGJ9AqchpAyG3ho8QNdqNFwHF84nS6vZDQz3ZIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] w-40 h-28 md:w-60 md:h-52 bg-cover rounded-2xl hover:scale-105 transition ease-out duration-300 hover:animate-pulse" />
          <p>Hygiene Products</p>
        </div>
      </div>
      <div className="group mx-auto px-5 py-2 rounded-2xl text-white bg-blue-700 transition ease-out duration-300 hover:animate-pulse">
        <Link to="/products">See More</Link>
        <svg className="fill-white inline ml-2 scale-0 hidden group-hover:scale-100 group-hover:inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default FeaturedProducts;
