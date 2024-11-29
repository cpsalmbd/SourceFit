import React, { useState, useRef } from "react";
import { FaSun, FaMoon, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => {
      document.documentElement.classList.toggle("dark", !prevIsDarkMode);
      return !prevIsDarkMode;
    });
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSearchTerm = event.target.value;

    if (newSearchTerm.length > 2) {
      // const filteredProducts = products.filter((product) =>
      //   product.title.toLowerCase().includes(newSearchTerm.toLowerCase())
      // );
      // const productIds = filteredProducts.map((product) => product.id);
      // localStorage.setItem("productIds", JSON.stringify(productIds));
    } else {
      localStorage.removeItem("productIds");
    }
  };

  const handleSearchInputFocus = () => setIsSearchOpen(true);
  const handleSearchInputBlur = () =>
    setIsSearchOpen(searchInputRef.current?.value !== "");

  return (
    <header className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between p-4">
        <div className="relative transition-all duration-300">
            <input
            ref={searchInputRef}
            type="text"
            className={`block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 ${
                isSearchOpen ? "w-96 opacity-100" : "w-0 opacity-0"
            }`}
            placeholder="Search..."
            onFocus={handleSearchInputFocus}
            onBlur={handleSearchInputBlur}
            />
            <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={() => searchInputRef.current?.focus()}
            >
            <FaSearch className="w-5 h-5 text-gray-400 dark:text-gray-300" />
            </div>
        </div>
        <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 text-gray-700 bg-transparent border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 dark:text-gray-300 dark:border-gray-600"
        >
            {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
