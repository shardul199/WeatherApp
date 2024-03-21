import React from "react";
import { day, icons } from "../utils/data";

// Define a functional component named RealTimeDisplay which takes props
export const RealTimeDisplay = ({ location, data }) => {
  // Log the data prop to the console for debugging
  console.log(data);

  // Extract the day index and formatted date from the data object
  let index = new Date(data.time);
  let date = index.toLocaleDateString();
  index = index.getDay();

  // Render the RealTimeDisplay component
  return (
    <div
      // Apply inline styles for background image
      style={{ backgroundImage: "url('/background.png')" }}
      // Apply Tailwind CSS classes for styling
      className="h-96 w-80 bg-cover bg-center rounded-lg flex flex-col justify-between py-7 px-4 text-white"
    >
      {/* Display the day, date, and location */}
      <div>
        <div className="font-extrabold">{day[index]}</div>
        <div>{date}</div>
        <div className="flex items-center">
          <img src="/svg/Location.svg" alt="location" className="h-5" />
          {location}
        </div>
      </div>

      {/* Display the temperature and weather icon */}
      <div className="w-20 flex flex-col justify-center items-center m-1">
        <div>
          <img src={icons[index % 3]} alt="png" />
        </div>
        <div className="text-3xl text-white font-extrabold">
          {data.values.temperature}C
        </div>
      </div>
    </div>
  );
};
