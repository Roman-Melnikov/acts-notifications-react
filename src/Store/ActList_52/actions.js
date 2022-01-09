import faker from "faker";
import { getCity } from "./func";
import { SET_PARAMETRS_ACT } from "./constants";
import { getAirLine } from "./func";
import { getContract } from "./func";

export const setParametrsActActionThink =
  (invoiseList, surnamePosition, actFlightNumbersAndArrivalDate) =>
  (dispatch, getState) => {
    const dateArrival = actFlightNumbersAndArrivalDate.datetimeArrival.substring(0, 10);
    console.log(invoiseList);
    const timeArrival = actFlightNumbersAndArrivalDate.datetimeArrival.substring(11, 16);
    const numberAct = actFlightNumbersAndArrivalDate.numberAct.substring(14, 16);
    const numberFlight = actFlightNumbersAndArrivalDate.numberFlight;
    const id = faker.datatype.uuid();  
    const city = getCity(getState, numberFlight);
    const airLine = getAirLine(getState, numberFlight);
    const contract = getContract(getState, numberFlight);

    dispatch({
      type: SET_PARAMETRS_ACT,
      payload: { invoiseList, surnamePosition, dateArrival, timeArrival, numberAct, numberFlight, id, city, airLine, contract },
    });
  };
