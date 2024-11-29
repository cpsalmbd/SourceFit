import React from "react";
import { Card as FlowbiteCard } from "flowbite-react";
import { FaStar } from "react-icons/fa";
import { CardProps } from "../Interfaces";

const Card: React.FC<CardProps> = ({
  imgAlt,
  imgSrc,
  title,
  rating,
  price,
  buttonText,
  buttonLink,
}) => (
  <div className="">
    <FlowbiteCard
      className="card h-full transition-transform duration-500 ease-in-out transform hover:scale-105"
      imgAlt={imgAlt}
      imgSrc={imgSrc}
    >
      <a href="#" aria-label={title}>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <div className="mb-5 flex items-center">
        {[...Array(rating)].map((_, index) => (
          <FaStar
            key={index}
            className="h-5 w-5 text-yellow-300 transition-colors duration-300 ease-in-out hover:text-yellow-500"
            aria-hidden="true"
          />
        ))}
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {rating}.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
        <a
          href={buttonLink}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          aria-label={buttonText}
        >
          {buttonText}
        </a>
      </div>
    </FlowbiteCard>
  </div>
);

export default Card;
