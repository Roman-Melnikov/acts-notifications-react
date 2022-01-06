import { ADD_FLIGHT, PARAMETRS_FLIGHTS } from "./constants";

const initialState = {
  parametrsFlights: PARAMETRS_FLIGHTS,
};

export const parametrsFlightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      return {
        ...state,
        parametrsFlights: action.payload,
      };
    default:
      return state;
  }
};
