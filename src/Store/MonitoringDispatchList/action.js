import {
  ADD_MONITORING_DISPATCH_LIST_ITEM,
  UPDATE_TIME_DISPATCH_CAR,
} from "./constants";
import { v4 as uuidv4 } from "uuid";
import { getNumberInvoice, getWeightInvoice } from "./func";
import { ADD_INVOICE_LIST_ITEM } from ".";

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

export const addInvoiceListItemFlightMonitoringDispatchActionThink =
  (
    monitoringDispatchListItem,
    numberFlight,
    transitDirection,
    dataInvoiceListItem,
    direction
  ) =>
  (dispatch, getState) => {
    const { monitoringDispatch } = getState(); // получаем нужный раздел store
    const { monitoringDispatchList } = monitoringDispatch; //получаем массив объектов-листов журнала отправки

    //получаем нужный рейс в текущем листе
    const flight = monitoringDispatchListItem.data.find((item) => {
      return item.numberFlight === numberFlight;
    });

    console.log(flight);
    const numberInvoice = getNumberInvoice(dataInvoiceListItem);
    const weightInvoice = getWeightInvoice(dataInvoiceListItem);
    const directionInvoice = transitDirection ? transitDirection : direction;

    //добавляем данные накладной
    flight.invoices.push({
      number: numberInvoice,
      direction: directionInvoice,
      weight: weightInvoice,
    });

    dispatch({
      type: ADD_INVOICE_LIST_ITEM,
      payload: monitoringDispatchList,
    });
  };
