import { useState } from "react";
import Weather from "./Components/Weather";
import toast, { Toaster } from 'react-hot-toast';
import "./App.css";
import { useEffect } from "react";

function App() {
  
  return (
    <>
      <Weather/>
      <Toaster/>
    </>
  );
}

export default App;
// location.lat
