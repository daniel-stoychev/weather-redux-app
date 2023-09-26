import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Import Redux Thunk middleware
import weatherReducer from "./reducers/weatherReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply Redux Thunk middleware
);

export default store;
