import React, { useState, useRef } from "react";
import { FaSun, FaMoon, FaSearch } from "react-icons/fa";

export const Header = ({
  setSearch,
}: {
  setSearch: (searchTerm: string) => void;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) =>
      document.documentElement.classList.toggle("dark", !prevIsDarkMode)
    );
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSearchTerm = event.target.value;
    setSearch(newSearchTerm);

  };

  const handleSearchInputFocus = () => setIsSearchOpen(true);

  const handleSearchInputBlur = () =>
    setIsSearchOpen(searchInputRef.current?.value !== "");

  return (
    <header className="bg-gray-100 dark:bg-gray-800 px-4">
      <div className="flex items-center justify-between py-3 max-w-[1200px] px-8 lg:px-0 w-full mx-auto">
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
            onChange={handleSearchInputChange}
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
