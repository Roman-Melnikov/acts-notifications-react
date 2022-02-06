import { v4 as uuidv4 } from 'uuid';
import { SET_ACT_LIST_51_DEFECTIVE_ITEM } from "./constants";

export const setActList_51_defectiveItemActionThink =
  (valueSelectionAct_52_Input, numberAct_51_defectiveAndIdThing) =>
  (dispatch, getState) => {
    numberAct_51_defectiveAndIdThing.forEach((item) => {
      dispatch({
        type: SET_ACT_LIST_51_DEFECTIVE_ITEM,
        payload: {
          idAct: `tp51-d${uuidv4()}`,
          name_52: valueSelectionAct_52_Input,
          idThing: item.id,
          numberAct: item.numberAct,
        },
      });
    });
  };
