import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
const navigate = useNavigate();
const [banner, setBanner] = useState({});
useEffect(()=> {
  const bannerData = async ()=>{
    const response = await fetch('https://fakestoreapi.com/products/14')
    const data = await response.json()
    console.log("data",data)
    setBanner(data)
  }
  bannerData()
},[])

const handleCart = (product,redirect)=> {
  console.log(product);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updateCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quntity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updateCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    alert("Product added to cart");
    if (redirect) {
      navigate("/cart");
    }
}

  return (

    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 cursor-pointer">
          <img
            className="object-cover object-center rounded"
            alt={banner?.title}
            src={banner?.image}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Limited Period Offer
            <br className="hidden lg:inline-block" />
            Hurry Now !!
          </h1>
          <h2 className=" sm:text-1xl text-3xl mb-4 font-small text-gray-600">Specifications</h2>
          <p className="mb-8 leading-relaxed">
            {banner?.description}
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            onClick={()=>handleCart(banner,true)}>
              Buy Now
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            onClick={()=>handleCart(banner)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
