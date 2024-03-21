import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { getCurrentLocation } from "../utils/getCurrentLocation";
import { key, realTimeData as preData } from "../utils/data";

// Define a custom hook named useGetDataRealTime
function useGetDataRealTime() {
  // Initialize state variables
  const [realTimeLoading, setLoading] = useState(false);
  const [realTimeData, setData] = useState(preData);

  // Define a function to fetch real-time weather data
  const getDataRealTime = async (location) => {
    try {
      // If location is set to "current", fetch current location coordinates
      if (location === "current") {
        const { latitude, longitude } = await getCurrentLocation();
        location = [latitude, longitude].join(",");
      }
      
      // Set loading state to true
      setLoading(true);
      
      // Fetch real-time data from the API using axios
      let response = await axios.get(
        `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${key}`
      );

      // Update state with the fetched real-time data
      setData(response.data.data);
    } catch (err) {
      // Handle errors by displaying an error toast and logging the error
      toast.error(err.message);
      console.log(err);
    } finally {
      // Set loading state back to false
      setLoading(false);
    }
  };

  // Return loading state, getDataRealTime function, and real-time data
  return { realTimeLoading, getDataRealTime, realTimeData };
}

// Export the useGetDataRealTime hook as the default export of this module
export default useGetDataRealTime;
