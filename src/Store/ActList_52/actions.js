import faker from "faker";
import { getCity } from "./func";
import { SET_PARAMETRS_ACT } from "./constants";
import { getAirLine } from "./func";
import { getContract } from "./func";
import { SET_PARAMETRS_THINGS } from "./constants";

export const setParametrsActActionThink =
  (invoiseListInput, surnamePosition, actFlightNumbersAndArrivalDateInput) =>
  (dispatch, getState) => {
    const dateArrival =
      actFlightNumbersAndArrivalDateInput.datetimeArrival.substring(0, 10);
    const timeArrival =
      actFlightNumbersAndArrivalDateInput.datetimeArrival.substring(11, 16);
    const numberAct =
      actFlightNumbersAndArrivalDateInput.numberAct.substring(18);
    const numberFlight = actFlightNumbersAndArrivalDateInput.numberFlight;
    const id = faker.datatype.uuid();
    const city = getCity(getState, numberFlight);
    const airLine = getAirLine(getState, numberFlight);
    const contract = getContract(getState, numberFlight);

    dispatch({
      type: SET_PARAMETRS_ACT,
      payload: {
        invoiseListInput,
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
    const notReceived = things.filter((thing) => thing.values.notReceived);
    const excess = things.filter(
      (thing) =>
        thing.values.excess &&
        !thing.values.defective &&
        !thing.values.differenceWeight
    );
    const excessAndDefectiveThingOrDifferenceWeight = things.filter((thing) => {
      return (
        thing.values.excess &&
        (thing.values.defective || thing.values.differenceWeight)
      );
    });
    const differenceWeight = things.filter(
      (thing) =>
        thing.values.differenceWeight &&
        !thing.values.defective &&
        !thing.values.excess
    );
    const defective = things.filter(
      (thing) => thing.values.defective && !thing.values.excess
    );
    newActList_52.actList_52.forEach((item, index) => {
      if (item.name === valueSelectionAct_52_Input) {
        const currentNotReceived = newActList_52.actList_52[index].reasons?.notReceived ?? [];
        const currentExcess = newActList_52.actList_52[index].reasons?.excess ?? [];
        const currentExcessAndDefectiveThingOrDifferenceWeight = newActList_52.actList_52[index].reasons?.excessAndDefectiveThingOrDifferenceWeight ?? [];
        const currentDifferenceWeight = newActList_52.actList_52[index].reasons?.differenceWeight ?? [];
        const currentDefective = newActList_52.actList_52[index].reasons?.defective ?? [];
        newActList_52.actList_52[index] = {
          ...item,
          reasons: {
            notReceived: [
              ...currentNotReceived,
              ...notReceived,
            ],
            excess: [
              ...currentExcess,
              ...excess,
            ],
            excessAndDefectiveThingOrDifferenceWeight: [
              ...currentExcessAndDefectiveThingOrDifferenceWeight,
              ...excessAndDefectiveThingOrDifferenceWeight,
            ],
            differenceWeight: [
              ...currentDifferenceWeight,
              ...differenceWeight,
            ],
            defective: [
              ...currentDefective,
              ...defective,
            ],
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
