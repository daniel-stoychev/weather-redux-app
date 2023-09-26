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
