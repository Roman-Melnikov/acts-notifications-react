import { ADD_INVOICE_LIST_ITEM } from ".";
import {
  MONITORING_DISPATCH_LIST_ITEM,
  UPDATE_TIME_DISPATCH_CAR,
} from "./constants";
import { ADD_MONITORING_DISPATCH_LIST_ITEM } from "./constants";

const initialState = {
  monitoringDispatchList: [],
};

export const monitoringDispatchListReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_MONITORING_DISPATCH_LIST_ITEM:
      console.log(state);
      console.log(state.monitoringDispatchList);
      return {
        monitoringDispatchList: [
          ...state.monitoringDispatchList,
          {
            name: payload.name,
            id: payload.id,
            data: MONITORING_DISPATCH_LIST_ITEM,
          },
        ],
      };
    case UPDATE_TIME_DISPATCH_CAR:
      return {
        monitoringDispatchList: payload,
      };
    case ADD_INVOICE_LIST_ITEM:
      return {
        monitoringDispatchList: payload,
      };
    default:
      return state;
  }
};
