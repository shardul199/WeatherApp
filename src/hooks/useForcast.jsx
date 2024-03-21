import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { getCurrentLocation } from "../utils/getCurrentLocation";
import { forCastData, key } from "../utils/data";

// Define a custom hook named useGetDataForCast
function useGetDataForCast() {
  // Initialize state variables
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(forCastData);

  // Define a function to fetch forecast data
  const getDataForCast = async (location) => {
    try {
      // If location is set to "current", fetch current location coordinates
      if (location === "current") {
        const { latitude, longitude } = await getCurrentLocation();
        location = [latitude, longitude].join(",");
      }
      
      // Set loading state to true
      setLoading(true);
      
      // Fetch forecast data from the API using axios
      let response = await axios.get(
        `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${key}`
      );

      // Update state with the fetched forecast data
      setData(response.data.timelines.daily);
    } catch (err) {
      // Handle errors by displaying an error toast and logging the error
      toast.error(err.message);
      console.log(err);
    } finally {
      // Set loading state back to false
      setLoading(false);
    }
  };

  // Return loading state, getDataForCast function, and forecast data
  return { loading, getDataForCast, data };
}

// Export the useGetDataForCast hook as the default export of this module
export default useGetDataForCast;
