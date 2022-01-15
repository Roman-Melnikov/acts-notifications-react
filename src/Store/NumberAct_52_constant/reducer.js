import { NUMBER_ACT_52_CONSTANT } from "./constants";
import { SET_NUMBER_ACT_52_CONSTANT } from "./constants";

const initialState = {
  numberAct_52_constant: NUMBER_ACT_52_CONSTANT,
};

export const numberAct_52_constantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER_ACT_52_CONSTANT:
      return {
        ...state,
        numberAct_52_constant: action.payload,
      };
    default:
      return state;
  }
};
