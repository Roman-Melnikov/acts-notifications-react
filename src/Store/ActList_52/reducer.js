import { SET_PARAMETRS_ACT } from "./constants";
import { SET_PARAMETRS_THINGS } from "./constants";

const initialState = {
  actList_52: [],
};

export const actList_52_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PARAMETRS_ACT:
      const {
        invoiseListInput,
        surnamePosition,
        dateArrival,
        timeArrival,
        numberAct,
        numberFlight,
        id,
        city,
        airLine,
        contract,
      } = payload;
      return {
        ...state,
        actList_52: [
          ...state.actList_52,
          {
            id: id,
            numberAct: numberAct,
            name: `${dateArrival}  №${numberAct} р${numberFlight}`,
            flight: {
              number: numberFlight,
              airLine: airLine,
              city: city,
              contract: contract,
            },
            dateArrival: dateArrival,
            timeArrival: timeArrival,
            surnamePosition: {
              firstFamily: surnamePosition.firstFamily ?? "Мельников Р.В.",
              secondFamily: surnamePosition.secondFamily,
              thirdFamily: surnamePosition.thirdFamily,
              fourthFamily: surnamePosition.fourthFamily,
            },
            invoiseList: invoiseListInput,
          },
        ],
      };
      case SET_PARAMETRS_THINGS:
        return {
          ...state,
          actList_52: payload,
        }
    default:
      return state;
  }
};
