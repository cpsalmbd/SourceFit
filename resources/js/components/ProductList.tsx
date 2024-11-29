import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Product } from "../Interfaces";
import CardPreloader from "./CardPreloader";
import Card from "./Card";

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get(
    "https://sourcefit.iamchristianpsalm.com/api/products",
    {
      headers: {
        Authorization: "Bearer 1|D38O2vGaKcrwLIjlvqh3yAXpsjJy4mh7mjRkDgph00c399fb",
      },
    }
  );

  return data.data.products;
};

const ProductList: React.FC = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[], Error>("products", fetchProducts);

  if (isLoading) {
    return (
      <div className="p-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(6)].map((_, index) => (
          <CardPreloader key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 my-5 md:grid-cols-2 lg:grid-cols-4">
      {products?.map((product) => (
        <Card
          key={product.id}
          imgAlt={product.title}
          imgSrc={product.thumbnail}
          title={product.title}
          rating={Math.round(product.rating)}
          price={product.price}
          buttonText="Add to cart"
          buttonLink="javascript:void(0);"
        />
      ))}
    </div>
  );
};

export default ProductList;
