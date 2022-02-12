import { CHIEF_FIRST_POSITION, CHIEF_MAN, DRIVER, OPERATOR } from "../../Screens/ParametrsActInput/constants";
import { SET_PARAMETRS_ACT } from "./constants";
import { SET_PARAMETRS_THINGS } from "./constants";

const initialState = {
  actList_52: [],
};

export const actList_52_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PARAMETRS_ACT:
      const {
        fromGA,
        name,
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
            name: name,
            fromGA: fromGA,
            flight: {
              number: numberFlight,
              airLine: airLine,
              city: city,
              contract: contract,
            },
            dateArrival: dateArrival,
            timeArrival: timeArrival,
            surnamePosition: {
              firstPosition: surnamePosition.firstPosition ?? CHIEF_FIRST_POSITION,
              secondPosition: surnamePosition.secondPosition ?? OPERATOR,
              thirdPosition: surnamePosition.thirdPosition ?? CHIEF_MAN,
              fourthPosition: surnamePosition.fourthPosition ?? DRIVER,
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
      };
    default:
      return state;
  }
};
