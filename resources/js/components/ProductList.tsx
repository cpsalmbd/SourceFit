import React from "react";
import CardPreloader from "./CardPreloader";
import Card from "./Card";
import { Product } from "../Interfaces";
import { UseQueryResult } from "react-query";

const ProductList: React.FC<UseQueryResult<Product[], Error>> = ({
  isLoading,
  isError,
  error,
  data: products,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-3 lg:gap-6 my-5 md:grid-cols-2 lg:grid-cols-4 justify-center items-center mx-auto">
        {[...Array(6)].map((_, index) => (
          <CardPreloader key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 w-full text-center my-10">
        Error: {error?.message}
      </div>
    );
  }

  if (products?.length === 0) {
    return (
      <div className="text-red-500 w-full text-center my-10">
        No Products Found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:gap-6 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mx-auto">
      {products?.map((product) => (
        <Card
          key={product.id}
          imgAlt={product.title}
          imgSrc={product.thumbnail}
          title={product.title}
          rating={Math.round(product.rating)}
          price={product.price}
          buttonText="Add to cart"
          buttonLink="#"
        />
      ))}
    </div>
  );
};

export default ProductList;
