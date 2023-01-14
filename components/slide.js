
import {Link} from 'react-scroll/modules';
import React from "react";
import Slider from "react-slick";
import data from "./data.json";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 4
            }
          }
        ]
      };
  return (
    
    <div className="lg:mx-16 mx-2 ">
      {/* slider */}
        <div className="flex justify-center items-center my-20">
  <div className="md:mx-4 grid grid-cols-1 lg:grid-cols-5 gap-5 md:mt-0 mt-2">
    
   {data.map((item) =>
   <div key={item.id}className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <div className="relative">
        <img className="md:w-[200px] md:h-[200px] w-auto h-auto rounded-xl" src={item.image}alt="img" />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">1 Eth</p>
      </div>
      <h1 className="mt-4 text-gray-800 text-sm text-center">{item.description}</h1>
      <div className="my-4">
      <Link className="cursor-pointer" activeClass ="active" to='mint' spy={true} smooth={true} offset={-70} duration={500}>
       <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Mint Now</button> </Link>
      </div>
    </div>
    )}
    </div>
    </div>
    </div>
    
  );
}











