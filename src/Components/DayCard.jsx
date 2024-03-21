import React from "react";
import { day, icons } from "../utils/data";

// Define a functional component named DayCard which takes a prop named 'data'
function DayCard({ data }) {
  // Extract the day index from the 'data.time' property
  let index = new Date(data.time);
  index = index.getDay();

  // Return JSX representing the DayCard component
  return (
    <div className="w-14 flex flex-col justify-center items-center p-2 m-[0.03rem] bg-[#272E37]">
      {/* Render an image element with a src attribute set to an icon based on the day index */}
      <div>
        <img src={icons[index % 3]} alt="png" />
      </div>
      {/* Render the day name based on the day index */}
      <div className="text-xs text-white">{day[index]}</div>
      {/* Render the average temperature rounded down to the nearest integer */}
      <div className="text-xs text-white">
        {Math.floor(data.values.temperatureAvg)}C{" "}
      </div>
    </div>
  );
}

// Export the DayCard component as the default export of this module
export default DayCard;
