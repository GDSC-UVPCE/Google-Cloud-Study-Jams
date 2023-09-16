

import React, { useEffect, useState } from 'react';

function Speedometer({ completion }) {
  const [animationValue, setAnimationValue] = useState(0);

  useEffect(() => {
    // Animate the speedometer when 'completion' prop changes
    const animationDuration = 2000; // You can adjust the duration
    let startValue = 0;
    const endValue = completion;

    const animationInterval = setInterval(() => {
      if (startValue >= endValue) {
        clearInterval(animationInterval);
      } else {
        startValue += 1;
        setAnimationValue(startValue);
      }
    }, (animationDuration / (endValue - startValue)) * 1);

    return () => {
      clearInterval(animationInterval);
    };
  }, [completion]);

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="relative w-40 h-40 rounded-full bg-gray-400 flex justify-center items-center overflow-hidden">
        <div className="absolute w-32 h-32 bg-white rounded-full">
          <div className="bg-red-500 w-28 h-28 absolute rotate-[10deg] -bottom-2 -right-12"></div>
          <div className="bg-blue-500 w-28 h-28 absolute rotate-[-30deg] -top-12 right-0 "></div>
          <div className="bg-green-500 w-28 h-28 absolute rotate-0 -top-5 -left-12"></div>
          <div className="bg-yellow-500 w-28 h-28 absolute rotate-[30deg] -left-20 -bottom-2 shadow-xl"></div>
        </div>

        <div className="relative w-32 h-32 bg-white rounded-full "></div>

        <svg
          className="absolute z-10 w-40 h-20 -left-0 bottom-5 rotate-[80deg]   flex justify-center items-center text-center"
          viewBox="0 0 528 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="293.173" cy="26" rx="27.7187" ry="26" fill="black" />
          <path
            d="M0.0830078 25.4737L396.021 13.3493V37.598L0.0830078 25.4737Z"
            fill="#1B0707"
          />
          <ellipse cx="293.173" cy="26" rx="14.9255" ry="14" fill="#FFCC18" />
        </svg>
      </div>
      <div className="absolute -bottom-5 w-60 h-20 bg-white rounded-t-full text-center font-semibold px-5 pt-10 text-green-500">
        <p className="bottom-0">
          {animationValue > 40
            ? animationValue > 60
              ? animationValue > 80
                ? 'Outstanding'
                : 'Level 1'
              : 'Level 2'
            : 'Level 3'}
        </p>
        <p>{`${animationValue}`}</p>
      </div>
    </div>
  );
}

export default Speedometer;
