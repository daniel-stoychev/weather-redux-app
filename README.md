# Weather Redux App

## Clarification
This is additonal and simple Redux project covering tasks which were skipped while creation of primary Weather Create React application. Reason behind this was my desire to first start with React basics, develop the app and then integrate Redux. However, I found the job a bit difficult and considering the deadline I decided to add one more site which you can find a link to under the links section of this README.  

## A Weather App

Including completed tasks:

- Set up a React project and configure Redux for state management.
- Integrate the OpenWeather API to retrieve weather data based on user input.
- Build user interface (UI) components, including a search bar and weather
display.
- Enhance user experience with visual representations of weather conditions.

## Comments and other solutions

### Installed dependencies
```bash
npm install redux react-redux             //Redux packages
npm install axios                         //library handling the API requests
npm install redux-thunk                   //middleware handling the API requests asynchronous
```
### Files
```bash
src/
  actions/
    weatherActions.js
  reducers/
    weatherReducer.js
  store.js
```
### ..src/actions/weatherActions.js
```bash
export const searchLocation = (location) => {
  return (dispatch) => {
    const apiKey = '2f9c3e0661fe1e100e833c4ea389f562';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
```
// API information ^
```bash
dispatch({ type: 'SEARCH_LOCATION_REQUEST' });
```
// Dispatching an action to signal the start of the API request ^
```bash
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
```
// API data and error handling ^
### ..src/actions/weatherReducer.js
```bash
const initialState = {
  location: "",
  temperature: null,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_LOCATION_SUCCESS":
      return {
        ...state,
        location: action.payload.location,
        temperature: action.payload.temperature,
        error: null,
      };
    case "SEARCH_LOCATION_FAILURE":
      return {
        ...state,
        location: "",
        temperature: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
```
// returns API data and error if detected ^
### ..src/App.js
```bash
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
```
// define props and how they pass data the parent component ^

#######################################

## node_modules 

All required dependencies are listed in the 'package.json' file. After cloning to local repository run `npm install` (or `yarn install`) to install the necessary dependencies locally.

## Used Languages

- HTML
- CSS
- JavaScript/JSX

## Run Locally

Clone the project

```bash
  git clone git clone https://github.com/daniel-stoychev/web-app-redux.git
```

Go to the project directory

```bash
  cd my-project
```

Runs the app in the development mode.

```bash
npm start
```

Launches the test runner in the interactive watch mode.

```bash
npm test
```
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
npm run build
```
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Commit and push to origin

```bash
  git add .
```
```bash
  git commit -m "Your commit message here"
```
```bash
  git push origin
```

## 🔗 Links
[![Web App](https://img.shields.io/badge/web_app-000?style=for-the-badge&logo=&logoColor=white)](https://redux.danielstoychev.com/)

## Authors

- [@DanielS](https://github.com/daniel-stoychev)

## Feedback

If you have any feedback, please reach out to me at daniel.stoychev@siteground.com

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
