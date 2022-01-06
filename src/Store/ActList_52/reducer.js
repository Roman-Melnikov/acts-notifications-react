import { SET_PARAMETRS_ACT } from "./constants";

const initialState = {
  actList_52: [],
};

export const actList_52_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PARAMETRS_ACT:
      console.log(payload);
      return {
        ...state,
        actList_52: [
          ...state.actList_52,
          {
            [payload.actFlightNumbersAndArrivalDate.numberAct]: {
              name: `${payload.actFlightNumbersAndArrivalDate.datetimeArrival}" "${payload.actFlightNumbersAndArrivalDate.numberAct}" с "${payload.actFlightNumbersAndArrivalDate.numberFlight}`,
              flight: {
                number: payload.actFlightNumbersAndArrivalDate.numberAct,
              },
            },
          },
        ],
      };
    default:
      return state;
  }
};
