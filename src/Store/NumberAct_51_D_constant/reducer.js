import { NUMBER_ACT_51_DEFECTIVE_CONSTANT } from "./constants";
import { SET_NUMBER_ACT_51_DEFECTIVE_CONSTANT } from "./constants";

const initialState = {
  numberAct_51_constant: NUMBER_ACT_51_DEFECTIVE_CONSTANT,
};

export const numberAct_51_constantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER_ACT_51_DEFECTIVE_CONSTANT:
      return {
        ...state,
        numberAct_51_constant: action.payload,
      };
    default:
      return state;
  }
};
