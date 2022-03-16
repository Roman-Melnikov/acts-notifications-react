import {
  ADD_MONITORING_DISPATCH_LIST_ITEM,
  UPDATE_TIME_DISPATCH_CAR,
  ADD_INVOICE_LIST_ITEM,
  REMOVE_INVOICE_LIST_ITEM,
} from "./constants";
import { v4 as uuidv4 } from "uuid";
import {
  getNumberInvoice,
  getWeightInvoice,
  getDataEms,
  getDataFirstClass,
  getDataInsurance,
  getDataInternational,
  getDataСorrespondence,
  getDataJournal,
  getDataParcel,
  getDataAirBags,
  getAmountTotalInvoice,
} from "./func";

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
    const flight = monitoringDispatchListItem.data?.find((item) => {
      return item.numberFlight === numberFlight;
    });

    //меняем время сдачи почты на а/м
    if (flight !== undefined) {
      flight.factDeliveryTime = timeDispatchCar;

      dispatch({
        type: UPDATE_TIME_DISPATCH_CAR,
        payload: [...monitoringDispatchList],
      });
    }
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
    let flight = monitoringDispatchListItem.data.find((item) => {
      return item.numberFlight === numberFlight;
    });

    //если в текущем листе такого рейса нет, то создаём его
    if (flight === undefined) {
      flight = {
        direction: direction,
        numberFlight: numberFlight,
        invoices: [],
        frequencyMovement: undefined,
        takeoffTime: undefined,
        contractDeliveryTime: undefined,
        factDeliveryTime: undefined,
      };
      monitoringDispatchListItem.data.push(flight);
    }

    const numberInvoice = getNumberInvoice(dataInvoiceListItem);
    const weightInvoice = getWeightInvoice(dataInvoiceListItem);
    const amountTotalInvoice = getAmountTotalInvoice(dataInvoiceListItem);
    const directionInvoice = transitDirection ? transitDirection : direction;
    const dataEms = getDataEms(dataInvoiceListItem);
    const dataFirstClass = getDataFirstClass(dataInvoiceListItem);
    const dataInsurance = getDataInsurance(dataInvoiceListItem);
    const dataInternational = getDataInternational(dataInvoiceListItem);
    const dataСorrespondence = getDataСorrespondence(dataInvoiceListItem);
    const dataJournal = getDataJournal(dataInvoiceListItem);
    const dataParcel = getDataParcel(dataInvoiceListItem);
    const dataAirBags = getDataAirBags(dataInvoiceListItem);

    //добавляем все данные накладной
    flight.invoices.push({
      number: numberInvoice,
      direction: directionInvoice,
      totalWeight: parseFloat(weightInvoice),
      totalAmount: parseFloat(amountTotalInvoice),
      emsAmount: parseFloat(dataEms[1]),
      emsWeight: parseFloat(dataEms[2]),
      firstClassAmount: parseFloat(dataFirstClass[1]),
      firstClassWeight: parseFloat(dataFirstClass[2]),
      insuranceAmount: parseFloat(dataInsurance[1]),
      insuranceWeight: parseFloat(dataInsurance[2]),
      internationalAmount: parseFloat(dataInternational[1]),
      internationalWeight: parseFloat(dataInternational[2]),
      correspondenceAmount: dataСorrespondence[0],
      correspondenceWeight: dataСorrespondence[1],
      journalAmount: parseFloat(dataJournal[1]),
      journalWeight: parseFloat(dataJournal[2]),
      parcelAmount: parseFloat(dataParcel[1]),
      parcelWeight: parseFloat(dataParcel[2]),
      airBags: parseFloat(dataAirBags),
    });

    dispatch({
      type: ADD_INVOICE_LIST_ITEM,
      payload: [...monitoringDispatchList],
    });
  };

export const removeInvoiceListItemFlightMonitoringDispatchActionThink =
  (monitoringDispatchListItem, numberFlight, numberInvoice) =>
  (dispatch, getState) => {
    const { monitoringDispatch } = getState(); // получаем нужный раздел store
    const { monitoringDispatchList } = monitoringDispatch; //получаем массив объектов-листов журнала отправки

    //получаем нужный рейс в текущем листе
    let flight = monitoringDispatchListItem.data.find((item) => {
      return item.numberFlight === numberFlight;
    });

    //отфильтровываем по номеру накладной
    flight.invoices = flight.invoices.filter((item) => {
      //накладная с совпашим номером не попадет в отфильтрованный массив
      return item.number !== numberInvoice;
    });

    dispatch({
      type: REMOVE_INVOICE_LIST_ITEM,
      payload: [...monitoringDispatchList],
    });
  };
