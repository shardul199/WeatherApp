import { useState, useEffect } from "react";
import { RealTimeDisplay } from "./RealTimeDisplay";
import Forcast from "./Forcast";
import useGetDataForCast from "../hooks/useForcast";
import useGetDataRealTime from "../hooks/useRealTime";
import { TailSpin } from "react-loader-spinner";

// Define a functional component named Weather
const Weather = () => {
  // Initialize state variables and custom hooks
  const { data, getDataForCast, loading } = useGetDataForCast();
  const { getDataRealTime, realTimeLoading, realTimeData } = useGetDataRealTime();
  const [location, setLocation] = useState("Current");

  // Fetch data for the initial location when the component mounts
  useEffect(() => {
    getDataForCast("current");
    getDataRealTime("current");
  }, []);

  // Render the Weather component
  return (
    <main className="flex flex-wrap h-screen w-screen justify-center items-center rounded-lg">
      {/* Render RealTimeDisplay component if real-time data is loading */}
      {realTimeLoading ? (
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#85E0E9"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <RealTimeDisplay data={realTimeData} location={location} />
      )}
      
      {/* Render Forcast component if forecast data is loading */}
      {loading ? (
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#85E0E9"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <Forcast
          getDataForCast={getDataForCast}
          getDataRealTime={getDataRealTime}
          location={location}
          forCastData={data}
          setLocation={setLocation}
        />
      )}
    </main>
  );
};

// Export the Weather component as the default export of this module
export default Weather;
