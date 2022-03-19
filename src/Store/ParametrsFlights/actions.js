import { ADD_FLIGHT } from "./constants";

export const addFlightActionThunk = (values) => (dispatch, getState) => {
  const { parametrsFlights: state } = getState();
  const { parametrsFlights: newParametrsFlights } = state;
  console.log(newParametrsFlights);
  newParametrsFlights.airLines.forEach((el) => {
    if (el.name === values.airLine) {
      el.flights.push(+values.numberFlight);
      return;
    }
  });
  newParametrsFlights.cities.forEach((el) => {
    if (el.fromWhere === values.fromWhere) {
      el.flights.push(+values.numberFlight);
      return;
    }
  });
  dispatch({ type: ADD_FLIGHT, payload: {...newParametrsFlights} });
};
