import React, { useEffect, useState } from "react";

import ProductCard from "../../component/ProductCard/Index";
import Categories from "../../component/Categories/Index";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Categories />
      <div className="flex flex-col text-center w-full mt-10">
        <h1 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
          ALL PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div className=" h-[40vh] flex justify-center items-center text-5xl ">
          {" "}
          Loading...{" "}
        </div>
      )}
    </div>
  );
};

export default Products;
