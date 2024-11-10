import React, { useState, useEffect } from 'react'; // Import hooks
import Map from './components/Map'; // Render the map
import locationData from './components/data'; // Import the JSON data
import './App.css'; // Import your CSS file
//import Navbar from './components/Navbar'; // imports navigation bar

const App = () => {

 
  const [locations, setLocations] = useState([]); // State to store locations data

  // useEffect to populate state with data from the JSON file
  useEffect(() => {
    setLocations(locationData); // Set the data from the JSON file to the state
  }, []);

  // Function to toggle visibility of the address for each location
  const toggleInfoVisibility = (id) => {
    setLocations(prevLocations => 
      prevLocations.map(location => 
        location.id === id ? { ...location, showInfo: !location.showInfo } : location
      )
    );
  };

  return (
    
    <div  className ="background" style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Container for the map */}
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h1 className="custom-font">Map</h1>
        <Map /> {/* Render the Map component */}
      </div>

      {/* Container for the data on the right */}
      <div style={{ flex: 1 }}>
        
        <h2 className="custom-font" >Recycling Locations</h2>

        {/* Loop through the locations array and display each location */}
        <ul>
          {locations.map(location => (
            <li className="text-box" key={location.id}>
              <h3>{location.name}</h3> {/* Display the name */}
              
              {/* Button to show/hide address */}
              <button onClick={() => toggleInfoVisibility(location.id)}>
                {location.showInfo ? 'Hide Info' : 'Show Info'}
              </button>

              {/* Conditionally render the address */}
              {location.showInfo && <p>
                Address: {location.address} 
                <br>{/*makes new line */}</br>

                Recycable Materials: <br></br> 
                      <ul> {/*used to loop */}
                      {location.materials.map((material, index) => (
                        <li key={index}>&emsp;{material}</li> // Loop through and display each material
                      ))}
                      </ul>{/*materials */}

                <br></br> {/*new line */}
                Contact Information: <br></br> 
                      &emsp;Phone: {location.phone} <br></br> 
                      &emsp;Website: <a href={`https://${location.website}`} target="_blank" rel="noopener noreferrer">{location.website}</a> {/*contact info*/}
              </p>  
              } {/* Display the info when 'showInfo' is true */}
            </li> // list of each location name
          ))}
        </ul> {/*loop of all locations info */}
      </div>
    </div>
  );
};

export default App;
