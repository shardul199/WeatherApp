// Define an asynchronous function named getCurrentLocation
export async function getCurrentLocation() {
  // Return a Promise that resolves with the current location or rejects with an error
  return new Promise((resolve, reject) => {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
      // If geolocation is supported, use getCurrentPosition method to get the current position
      navigator.geolocation.getCurrentPosition(
        // Success callback function, called when the current position is successfully retrieved
        (position) => {
          // Extract latitude and longitude from the position object
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // Resolve the Promise with an object containing latitude and longitude
          resolve({ latitude, longitude });
        },
        // Error callback function, called when there's an error retrieving the current position
        (error) => {
          // Reject the Promise with the error
          reject(error);
        }
      );
    } else {
      // If geolocation is not supported, reject the Promise with an error
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}
