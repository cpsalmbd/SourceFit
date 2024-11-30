import React, { StrictMode, useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import { useQuery } from "react-query";
import { Product } from "./Interfaces";
import axios from "axios";
import { createRoot } from 'react-dom/client';
import '../css/custom.css';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

interface FetchProductsOptions {
  search: string;
  limit: number;
  offset: number;
}

const fetchProducts = async ({
  search,
  limit,
  offset,
}: FetchProductsOptions): Promise<Product[]> => {
  const { data } = await axios.get(
    `https://sourcefit.iamchristianpsalm.com/api/products?search=${search}&limit=${limit}&offset=${offset}&select=id,title,price,rating,thumbnail`,
    {
      headers: {
        Authorization:
          "Bearer 1|D38O2vGaKcrwLIjlvqh3yAXpsjJy4mh7mjRkDgph00c399fb",
      },
    }
  );

  localStorage.setItem("totalProductsCount", String(data.data.total));

  return data.data.products;
};

const App = () => {
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const ApiResult = useQuery<Product[], Error>(
    ["products", search, offset],
    () => fetchProducts({ search, limit: 8, offset })
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const toggleDark = () =>
      document.documentElement.classList.toggle("dark", mediaQuery.matches);

    mediaQuery.addEventListener("change", toggleDark);
    toggleDark();

    return () => mediaQuery.removeEventListener("change", toggleDark);
  }, []);

  return (
    <div className="min-h-screen">
    <Header setSearch={setSearch} />
    <div className="flex items-center justify-center">
        <div className="px-4 max-w-[1200px] w-full mx-auto">
        <ProductList {...ApiResult} />
        </div>
    </div>
    {ApiResult.data?.length !== 0 || ApiResult.isError ? (
        <footer className="mb-5">
        <Pagination setOffset={setOffset} />
        </footer>
    ) : null}
    </div>
  );
};

createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <StrictMode>
        <App />
        </StrictMode>
    </QueryClientProvider>
);

