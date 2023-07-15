import React, { useEffect, useState } from "react";
import Hero from "../../component/Hero/Index";

import FeatureCard from "../../component/FeatureCard/Index";
import StatCard from "../../component/StatCard/Index";
import ProductCard from "../../component/ProductCard/Index";
import Categories from "../../component/Categories/Index";
import Banner from "../../component/Banner/Index";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsData = async () => {
      //   await fetch("https://fakestoreapi.com/products")
      //     .then((response) => {
      //       return response.json();
      //     })
      //     .then((data) => {
      //       console.log(data);
      //       setProducts(data);
      //     });
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=12");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    productsData();
  }, []);

  return (
    <>
    <Banner />
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full mt-10">
        <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Deals Of The Day !!
        </h1>
      </div>

      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading...</div>
      )}

      {/* <Products /> */}
     
      <StatCard />
    </>
  );
};

export default Home;
