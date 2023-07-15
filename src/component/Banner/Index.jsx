import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-auto text-gray-200 py-24 px-10 object-fill ml-5 mr-5 mt-5 opacity-90"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
      }}
    >
      <div className="md:w-1/2">
        <p className="font-bold text-sm uppercase">LIMITED PERIOD OFFER</p>
        <p className="text-3xl font-bold">Upto 70% OFF*</p>
        <p className="text-2xl mb-10 leading-none">
          Attractive designs for your brand
        </p>
        <Link to={'/products'}
          className="bg-yellow-500 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default Banner;
