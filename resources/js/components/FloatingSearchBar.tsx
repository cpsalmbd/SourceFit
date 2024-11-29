import React from "react";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "flowbite-react";

const FloatingSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const inputClassName = `w-full p-2 border rounded-full focus:outline-none ${isFocused ? 'focus:ring-2 focus:ring-cyan-300' : ''}`;

  return (
    <motion.div
      className="fixed top-4 left-1/2 p-4 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out"
      style={{ width: isFocused ? 256 : 48 }}
    >
      <input
        type="text"
        placeholder="Search..."
        className={inputClassName}
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Button className="ml-2">Click me</Button>
    </motion.div>
  );
};

export default FloatingSearchBar;
