import faker from "faker";
import { getCity } from "./func";
import { SET_PARAMETRS_ACT } from "./constants";
import { getAirLine } from "./func";
import { getContract } from "./func";
import { SET_PARAMETRS_THINGS } from "./constants";
import {
  changeFormatDateUndTimeInInvoiseList,
  getActualWeightThing,
  getFromAddress,
  getNumberThing,
  getTypeThing,
  getWhereAddress,
} from "./index";

export const setParametrsActActionThink =
  (invoiseListInput, surnamePosition, actFlightNumbersAndArrivalDateInput) =>
  (dispatch, getState) => {
    const newInvoiseListInput =
      changeFormatDateUndTimeInInvoiseList(invoiseListInput);
    const dateArrival =
      actFlightNumbersAndArrivalDateInput.datetimeArrival.substring(0, 10);
    const timeArrival =
      actFlightNumbersAndArrivalDateInput.datetimeArrival.substring(11, 16);
    const numberAct =
      actFlightNumbersAndArrivalDateInput.numberAct.substring(18);
    const numberFlight = actFlightNumbersAndArrivalDateInput.numberFlight;
    const id = `type52${faker.datatype.uuid()}`;
    const city = getCity(getState, numberFlight);
    const airLine = getAirLine(getState, numberFlight);
    const contract = getContract(getState, numberFlight);

    dispatch({
      type: SET_PARAMETRS_ACT,
      payload: {
        invoiseListInput: newInvoiseListInput,
        surnamePosition,
        dateArrival,
        timeArrival,
        numberAct,
        numberFlight,
        id,
        city,
        airLine,
        contract,
      },
    });
  };

export const setParametrsThingsActionThink =
  (things, valueSelectionAct_52_Input) => (dispatch, getState) => {
    const { actList_52: newActList_52 } = getState();
    /**
     * получение данных о вещи, при помощи регулярных выражений
     */
    things.forEach((thing) => {
      const newDataThing = {
        typeThing: getTypeThing(thing.values.data).typeThing,
        typeIdForSort: getTypeThing(thing.values.data).typeIdForSort,
        numberThing: getNumberThing(thing.values.data),
        actualWeight: getActualWeightThing(thing.values.data),
        whereAddress: getWhereAddress(thing.values.data),
        fromAddress: getFromAddress(thing.values.data),
      };
      thing.values.data = newDataThing;
    });

    const notReceived = things.filter((thing) => thing.values.notReceived);
    const excess = things.filter((thing) => thing.values.excess);
    const differenceWeight = things.filter(
      (thing) => thing.values.differenceWeight && !thing.values.defective
    );
    const defective = things.filter((thing) => thing.values.defective);

    /**
     * добавление к текущим разделам reasons новых
     */
    newActList_52.actList_52.forEach((item, index) => {
      if (item.name === valueSelectionAct_52_Input) {
        const currentNotReceived = item.reasons?.notReceived ?? [];
        const currentExcess = item.reasons?.excess ?? [];
        const currentDifferenceWeight = item.reasons?.differenceWeight ?? [];
        const currentDefective = item.reasons?.defective ?? [];
        newActList_52.actList_52[index] = {
          ...item,
          reasons: {
            notReceived: [...currentNotReceived, ...notReceived],
            excess: [...currentExcess, ...excess],
            differenceWeight: [...currentDifferenceWeight, ...differenceWeight],
            defective: [...currentDefective, ...defective],
          },
        };
        return;
      }
    });

    dispatch({
      type: SET_PARAMETRS_THINGS,
      payload: newActList_52.actList_52,
    });
  };
