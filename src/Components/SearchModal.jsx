import React from "react";
import { CiSearch } from "react-icons/ci";
import useGetDataForCast from "../hooks/useForcast";
import useGetDataRealTime from "../hooks/useRealTime";

// Define a functional component named SearchModal which takes props
function SearchModal({
  setShow,
  setLocation,
  location,
  getDataForCast,
  getDataRealTime,
}) {
  // Function to handle the search action
  function handleSearch() {
    // Close the search modal
    setShow(false);
    // Fetch forecast data based on the entered location
    getDataForCast(location);
    // Fetch real-time data based on the entered location
    getDataRealTime(location);
  }

  // Render the SearchModal component
  return (
    <div className="fixed top-20 left-[calc(50%-10rem)] bg-white flex rounded-md">
      {/* Input field for entering location */}
      <input
        placeholder="Enter location"
        onChange={(e) => setLocation(e.target.value)}
        className="rounded-md px-4 py-1 border-none outline-none focus:outline-none"
        type="text"
        value={location}
      />
      {/* Search icon for triggering the search action */}
      <CiSearch className="w-7 h-7" onClick={handleSearch} />
    </div>
  );
}

// Export the SearchModal component as the default export of this module
export default SearchModal;
