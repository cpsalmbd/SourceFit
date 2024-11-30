import React from 'react';
import { Card as FlowbiteCard } from "flowbite-react";

const CardPreloader: React.FC = () => (
    <FlowbiteCard className="animate-pulse h-[23em] w-[18em]">
      <div className="space-y-4">
        <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        <div className="space-y-2">
          <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="flex items-center space-x-3">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-5 w-5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="h-7 w-24 bg-gray-300 dark:bg-gray-700 rounded"></span>
          <span className="h-8 w-24 bg-cyan-300 dark:bg-cyan-700 rounded"></span>
        </div>
      </div>
    </FlowbiteCard>
  );

export default CardPreloader;
