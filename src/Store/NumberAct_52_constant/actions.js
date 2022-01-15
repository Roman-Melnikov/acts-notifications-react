import { SET_NUMBER_ACT_52_CONSTANT } from "./constants";

export const setNumberAct_52_constantActionThink =
  (newNumber) => (dispatch, getState) => {
    dispatch({ type: SET_NUMBER_ACT_52_CONSTANT, payload: newNumber });
  };
