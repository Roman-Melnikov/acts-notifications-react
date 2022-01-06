import { SET_PARAMETRS_ACT } from "./constants";

export const setParametrsActActionThink =
  (invoiseList, surnamePosition, actFlightNumbersAndArrivalDate) =>
  (dispatch, getState) => {
    actFlightNumbersAndArrivalDate.datetimeArrival =
      actFlightNumbersAndArrivalDate.datetimeArrival.substring(0, 10);
    actFlightNumbersAndArrivalDate.numberAct =
      actFlightNumbersAndArrivalDate.numberAct.substring(14, 16);
    dispatch({
      type: SET_PARAMETRS_ACT,
      payload: { invoiseList, surnamePosition, actFlightNumbersAndArrivalDate },
    });
  };
