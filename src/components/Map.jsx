
// Import necessary libraries and components
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
//import { db } from './firebase' // Import the Firebase configuration (update the path if necessary)

// Define the container style for the Google Map
const containerStyle = {
  width: '600px', // Set the map width to 400px
  height: '600px', // Set the map height to 400px
}

// Define the initial center coordinates for the map
const center = {
  lat: 39.18230, // Latitude for Manhattan, KS
  lng: -96.56910, // Longitude for Manhattan, KS
}

function MyComponent() {
  // Load the Google Maps API and specify your API key
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script', // An optional ID to reference this loader instance
    googleMapsApiKey: 'AIzaSyAd4LeHv-hN7YOFK-LZ7tt_J60IsaBfm6g',
  })

  // Set up a state variable to store the map instance
  const [map, setMap] = React.useState(null)

  // Callback function that executes when the map is fully loaded
  const onLoad = React.useCallback(function callback(map) {
    // Create a LatLngBounds object with the initial center location
    const bounds = new window.google.maps.LatLngBounds(center)
    // Fit the map to the specified bounds
    map.fitBounds(bounds)
    // Save the map instance to the state
    setMap(map)
  }, [])

  // Callback function that executes when the map is unmounted (clean-up)
  const onUnmount = React.useCallback(function callback(map) {
    // Clear the map instance from the state when the component unmounts
    setMap(null)
  }, [])

  // Render the map if it has finished loading
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle} // Set the container style for the map
      center={center} // Set the initial center position
      zoom={10} // Set the default zoom level
      onLoad={onLoad} // Triggered when the map has loaded
      onUnmount={onUnmount} // Triggered when the map is unmounted
    >
      {/* Additional child components (e.g., markers) would go here */}
      <></>
    </GoogleMap>
  ) : (
    <></> // If the map isn't loaded, render an empty fragment
  )
}

// Export the component with React.memo to optimize performance
export default React.memo(MyComponent)
