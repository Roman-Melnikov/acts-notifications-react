import { SET_NUMBER_ACT_52 } from "./constants";

const initialState = {
  numberAct_52_constant: "7.1.40.2.4-41/",
};

export const numberAct_52_constantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER_ACT_52:
      return {
        ...state,
        numberAct_52_constant: action.payload,
      };
    default:
      return state;
  }
};
