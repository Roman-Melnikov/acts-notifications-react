import {
  ADD_MONITORING_DISPATCH_LIST_ITEM,
  UPDATE_TIME_DISPATCH_CAR,
} from "./constants";
import { v4 as uuidv4 } from "uuid";

export const addMonitoringDispatchListItemActionThink =
  (name) => (dispatch, getState) => {
    dispatch({
      type: ADD_MONITORING_DISPATCH_LIST_ITEM,
      payload: {
        name: name,
        id: uuidv4(),
      },
    });
  };

export const updateTimeDispatchCarActionThink =
  (monitoringDispatchListItem, numberFlight, timeDispatchCar) =>
  (dispatch, getState) => {
    const { monitoringDispatch } = getState(); // получаем раздел store
    const { monitoringDispatchList } = monitoringDispatch; //получаем массив объектов-листов журнала отправки

    //получаем нужный рейс в текущем листе
    const flight = monitoringDispatchListItem.data.find((item) => {
      return item.numberFlight === numberFlight;
    });

    //меняем время сдачи почты на а/м
    flight.factDeliveryTime = timeDispatchCar;

    dispatch({
      type: UPDATE_TIME_DISPATCH_CAR,
      payload: monitoringDispatchList,
    });
  };
