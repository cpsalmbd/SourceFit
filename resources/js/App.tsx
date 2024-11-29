import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";

import ProductList from "./components/ProductList";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => {
    useEffect(() => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        document.documentElement.classList.toggle("dark", mediaQuery.matches);
      };

      handleChange();
      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }, []);

    return (
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className="p-4 flex items-center justify-center min-h-screen dark:bg-[#1a2234]">
          <div className="max-w-[1200px] w-full mx-auto">
            <ProductList />
          </div>
        </div>
      </QueryClientProvider>
    );
};

createRoot(document.getElementById('app') as HTMLElement).render(<App />);
