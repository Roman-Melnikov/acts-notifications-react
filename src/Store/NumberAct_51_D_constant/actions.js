import { SET_NUMBER_ACT_51_DEFECTIVE_CONSTANT } from "./constants";

export const setNumberAct_51_constantActionThink =
  (newNumber) => (dispatch, getState) => {
    dispatch({
      type: SET_NUMBER_ACT_51_DEFECTIVE_CONSTANT,
      payload: newNumber,
    });
  };
