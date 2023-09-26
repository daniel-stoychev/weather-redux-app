import React, { useState } from "react";
import { connect } from "react-redux";
import { searchLocation } from "./actions/weatherActions";

function App(props) {
  const [location, setLocation] = useState("");

  const handleSearchLocation = () => {
    if (location.trim() === "") {
      alert("Please enter a location.");
    } else {
      props.searchLocation(location);
      setLocation("");
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearchLocation}>Search</button>

      {props.error && <p className="error">{props.error}</p>}
      {props.location && (
        <div>
          <p>Location: {props.location}</p>
          <p>Temperature: {props.temperature}</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    location: state.weather.location,
    temperature: state.weather.temperature,
    error: state.weather.error,
  };
};

const mapDispatchToProps = {
  searchLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
