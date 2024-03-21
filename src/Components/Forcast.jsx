import React, { useState } from "react";
import DayCard from "./DayCard";
import SearchModal from "./SearchModal";

// Define a functional component named Forcast which takes props
function Forcast({ location, setLocation, forCastData, getDataForCast, getDataRealTime }) {
  // Initialize state for controlling the visibility of the SearchModal component
  const [show, setShow] = useState(false);

  // Render the Forcast component
  return (
    <div className="bg-[#222831] rounded-lg h-[22rem] w-96 p-3 flex flex-col justify-evenly">
      {/* Display precipitation, humidity, and wind data */}
      <div className="flex justify-between text-white">
        <ol className="font-semibold">
          <li>PRECIPITATION</li>
          <li>HUMIDITY</li>
          <li>WIND</li>
        </ol>
        <ol>
          <li>{forCastData[0]?.values?.precipitationProbabilityAvg}</li>
          <li>{forCastData[0]?.values?.humidityAvg}</li>
          <li>{forCastData[0]?.values?.windGustAvg}</li>
        </ol>
      </div>
      {/* Display DayCard components for each day in the forecast */}
      <div className="flex items-center justify-center">
        {forCastData &&
          forCastData.map((val, i) => <DayCard data={val} day={i} />)}
      </div>
      {/* Button to open the SearchModal component */}
      <div className="flex justify-center">
        <button
          className="bg-[#85E0E9] w-48 rounded-sm flex items-center justify-center text-white text-sm p-1"
          onClick={() => setShow(true)}
        >
          <img src="/svg/Location.svg" alt="location" className="w-4" />
          Change the location
        </button>
        {/* Render the SearchModal component if 'show' state is true */}
        {show && (
          <SearchModal
            getDataForCast={getDataForCast}
            getDataRealTime={getDataRealTime}
            location={location}
            setLocation={setLocation}
            setShow={setShow}
          />
        )}
      </div>
    </div>
  );
}

// Export the Forcast component as the default export of this module
export default Forcast;
