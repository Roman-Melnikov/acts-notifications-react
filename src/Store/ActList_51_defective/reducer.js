import { SET_ACT_LIST_51_DEFECTIVE_ITEM } from "./constants";

const initialState = {
  actList_51_defective: [],
};

export const actList_51_defectiveReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACT_LIST_51_DEFECTIVE_ITEM:
      return {
        ...state,
        actList_51_defective: [
          ...state.actList_51_defective,
          {
            idAct: payload.idAct,
            name_52: payload.name_52,
            idThing: payload.idThing,
            numberAct: payload.numberAct,
          },
        ],
      };
    default:
      return state;
  }
};
