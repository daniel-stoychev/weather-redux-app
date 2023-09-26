import axios from "axios";

export const searchLocation = (location) => {
  return (dispatch) => {
    const apiKey = "2f9c3e0661fe1e100e833c4ea389f562";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    // Dispatching an action to signal the start of the API request
    dispatch({ type: "SEARCH_LOCATION_REQUEST" });

    axios
      .get(apiUrl)
      .then((response) => {
        dispatch({
          type: "SEARCH_LOCATION_SUCCESS",
          payload: {
            location: response.data.name,
            temperature: response.data.main.temp.toFixed(1) + "°C",
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "SEARCH_LOCATION_FAILURE",
          payload: "Weather data not found for the location.",
        });
      });
  };
};
