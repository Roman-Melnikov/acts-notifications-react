export const getDataForActType_51_defective = (
  actList_52,
  actList_51_defectiveItem
) => {
  const actList_52_item = actList_52.find(
    (actList_52_item) =>
      actList_52_item.name === actList_51_defectiveItem.name_52
  );
  const { data, defective, description, differenceWeight, giviWeight } =
    actList_52_item.reasons.defective.find(
      (item) => item.id === actList_51_defectiveItem.idThing
    ).values;
  return {
    surnamePosition: {
      firstPosition: actList_52_item.surnamePosition.firstPosition,
      firstFamily: actList_52_item.surnamePosition.firstFamily,
      secondPosition: actList_52_item.surnamePosition.secondPosition,
      secondFamily: actList_52_item.surnamePosition.secondFamily,
    },
    values: {
      data,
      defective,
      description,
      differenceWeight,
      giviWeight,
    },
    dateArrival: actList_52_item.dateArrival,
    timeArrival: actList_52_item.timeArrival,
    invoiseList: actList_52_item.invoiseList,
    flight: actList_52_item.flight,
    fromGA: actList_52_item.fromGA,
  };
};

export const getMounthStringByNumber = (mounthNumber) => {
  let mounthString = " ";
  switch (mounthNumber) {
    case "01":
      mounthString = "Январь";
      break;
    case "02":
      mounthString = "Февраль";
      break;
    case "03":
      mounthString = "Март";
      break;
    case "04":
      mounthString = "Апрель";
      break;
    case "05":
      mounthString = "Май";
      break;
    case "06":
      mounthString = "Июнь";
      break;
    case "07":
      mounthString = "Июль";
      break;
    case "08":
      mounthString = "Август";
      break;
    case "09":
      mounthString = "Сентябрь";
      break;
    case "10":
      mounthString = "Октябрь";
      break;
    case "11":
      mounthString = "Ноябрь";
      break;
    case "12":
      mounthString = "Декабрь";
      break;
    default:
      return mounthString;
  }
  return mounthString;
};

/**
 * получение массива вещей из массива differenceWeight, которые не дублируются в массиве excess
 * т.к. актуальный вес вещей из массива excess уже прибавляется, при подсчете веса в функциях
 */
export const getThingsFromDifferenceWeightNotDuplicatesInExcess = (
  currentAct
) => {
  /*объединение двух массивов: differenceWeight и defective */
  const concatenatedDifferenceWeightAndDefective = [
    ...currentAct?.reasons?.differenceWeight,
    ...currentAct?.reasons?.defective.filter((thingDefective) => {
      return thingDefective.values.differenceWeight;
    }),
  ];
  const thingsFromDifferenceWeightNotDuplicatesInExcess =
    concatenatedDifferenceWeightAndDefective.filter((thingDifferenceWeight) => {
      return !currentAct.reasons.excess.find((thingExcess) => {
        return thingDifferenceWeight.id === thingExcess.id;
      });
    });
  return thingsFromDifferenceWeightNotDuplicatesInExcess;
};

/**
 * получение общего веса для TMS
 * вес для TMS меняется если, только количество вещей пришло меньше
 */
export const getForTmsTotalWeight = (currentAct) => {
  let forTmsTotalWeight = 0;
  if (
    currentAct?.reasons?.notReceived.length > currentAct?.reasons?.excess.length
  ) {
    forTmsTotalWeight =
      /*сумма веса всех общих */
      currentAct.invoiseList.reduce((accum, currentValue) => {
        return accum + parseFloat(currentValue.totalWeight.replace(",", "."));
      }, 0) -
      /*сумма веса всех не поступивших вещей */
      currentAct.reasons.notReceived.reduce((accum, currentValue) => {
        return (
          accum +
          parseFloat(currentValue.values.data.actualWeight.replace(",", "."))
        );
      }, 0) +
      /*сумма веса всех поступивших без приписки вещей */
      currentAct.reasons.excess.reduce((accum, currentValue) => {
        return (
          accum +
          parseFloat(currentValue.values.data.actualWeight.replace(",", "."))
        );
      }, 0) +
      /*сумма разниц, актуального и подавательского весов, вещей из отфильтрованного(вещи не дублирующиеся в excess) массива differenceWeight */
      getThingsFromDifferenceWeightNotDuplicatesInExcess(currentAct).reduce(
        (accum, currentValue) => {
          return (
            accum +
            (parseFloat(
              currentValue.values.data.actualWeight.replace(",", ".")
            ) -
              parseFloat(currentValue.values.giviWeight.replace(",", ".")))
          );
        },
        0
      );
  } else {
    /*сумма веса всех общих */
    forTmsTotalWeight = currentAct.invoiseList.reduce((accum, currentValue) => {
      return accum + parseFloat(currentValue.totalWeight.replace(",", "."));
    }, 0);
  }
  return forTmsTotalWeight.toFixed(3);
};

/**
 * получение веса EMS-ов для TMS
 * вес для TMS меняется если, только количество вещей пришло меньше
 */
export const getForTmsEmsWeight = (currentAct) => {
  let forTmsEmsWeight = 0;
  if (
    currentAct?.reasons?.notReceived.length > currentAct?.reasons?.excess.length
  ) {
    forTmsEmsWeight =
      /*сумма веса EMS всех общих */
      currentAct.invoiseList.reduce((accum, currentValue) => {
        return (
          accum + parseFloat(currentValue.emsWeight?.replace(",", ".") ?? 0)
        );
      }, 0) -
      /*сумма веса всех не поступивших EMS */
      currentAct.reasons.notReceived.reduce((accum, currentValue) => {
        return (
          accum +
          parseFloat(
            currentValue.values?.data?.typeThing === "EMS"
              ? currentValue.values.data.actualWeight.replace(",", ".")
              : 0
          )
        );
      }, 0) +
      /*сумма веса всех поступивших без приписки EMS */
      currentAct.reasons.excess.reduce((accum, currentValue) => {
        return (
          accum +
          parseFloat(
            currentValue.values?.data?.typeThing === "EMS"
              ? currentValue.values.data.actualWeight.replace(",", ".")
              : 0
          )
        );
      }, 0) +
      /*сумма разниц, актуального и подавательского весов, вещей из отфильтрованного(вещи не дублирующиеся в excess) массива differenceWeight */
      getThingsFromDifferenceWeightNotDuplicatesInExcess(currentAct).reduce(
        (accum, currentValue) => {
          if (currentValue === "EMS") {
            return (
              accum +
              (parseFloat(
                currentValue.values.data.actualWeight.replace(",", ".")
              ) -
                parseFloat(currentValue.values.giviWeight.replace(",", ".")))
            );
          } else {
            return accum + 0;
          }
        },
        0
      );
  } else {
    /*сумма веса EMS всех общих */
    forTmsEmsWeight = currentAct.invoiseList.reduce((accum, currentValue) => {
      return accum + parseFloat(currentValue.emsWeight?.replace(",", ".") ?? 0);
    }, 0);
  }
  return forTmsEmsWeight.toFixed(3);
};

/**
 * получение общего количества вещей для TMS
 * общее количество вещей для TMS меняется если, только количество вещей пришло меньше
 */
export const getForTmsThingAmount = (currentAct) => {
  let forTmsThingAmount = 0;
  if (
    currentAct?.reasons?.notReceived.length > currentAct?.reasons?.excess.length
  ) {
    forTmsThingAmount =
      /*сумма количества вещей всех общих */
      currentAct.invoiseList.reduce((accum, currentValue) => {
        return accum + parseInt(currentValue.thingAmount);
      }, 0) -
      /*количество всех не поступивших вещей */
      parseInt(currentAct?.reasons?.notReceived?.length ?? 0) +
      /*количество всех поступивших без приписки вещей */
      parseInt(currentAct?.reasons?.excess?.length ?? 0);
  } else {
    /*сумма количества вещей всех общих */
    forTmsThingAmount = currentAct.invoiseList.reduce((accum, currentValue) => {
      return accum + parseInt(currentValue.thingAmount);
    }, 0);
  }
  return forTmsThingAmount;
};

/**
 * получение общего веса для журнала мониторинга
 */
export const getForMonitoringTotalgWeight = (currentAct) => {
  let forMonitoringTotalgWeight =
    /*сумма веса всех общих */
    currentAct.invoiseList.reduce((accum, currentValue) => {
      return accum + parseFloat(currentValue.totalWeight.replace(",", "."));
    }, 0) -
    /*сумма веса всех не поступивших вещей */
    currentAct.reasons.notReceived.reduce((accum, currentValue) => {
      return (
        accum +
        parseFloat(currentValue.values.data.actualWeight.replace(",", "."))
      );
    }, 0) +
    /*сумма веса всех поступивших без приписки вещей */
    currentAct.reasons.excess.reduce((accum, currentValue) => {
      return (
        accum +
        parseFloat(currentValue.values.data.actualWeight.replace(",", "."))
      );
    }, 0) +
    /*сумма разниц, актуального и подавательского весов, вещей из отфильтрованного(вещи не дублирующиеся в excess) массива differenceWeight */
    getThingsFromDifferenceWeightNotDuplicatesInExcess(currentAct).reduce(
      (accum, currentValue) => {
        return (
          accum +
          (parseFloat(currentValue.values.data.actualWeight.replace(",", ".")) -
            parseFloat(currentValue.values.giviWeight.replace(",", ".")))
        );
      },
      0
    );
  return forMonitoringTotalgWeight.toFixed(3);
};

/**
 * получение общего количества вещей для журнала мониторинга
 */
export const getForMonitoringThingAmount = (currentAct) => {
  let forMonitoringThingAmount =
    /*сумма количества вещей всех общих */
    currentAct.invoiseList.reduce((accum, currentValue) => {
      return accum + parseInt(currentValue.thingAmount);
    }, 0) -
    /*количество всех не поступивших вещей */
    parseInt(currentAct?.reasons?.notReceived?.length ?? 0) +
    /*количество всех поступивших без приписки вещей */
    parseInt(currentAct?.reasons?.excess?.length ?? 0);
  return forMonitoringThingAmount;
};

/**
 * получение справочной информации для журнала мониторинга, если от ГА
 */
export const getForMonitorihgAdditionalInformationIfFromGa = (currentAct) => {
  let emsAmount = 0;
  let firstClassAmount = 0;
  let internationalAmount = 0;
  let parcelAmount = 0;
  let insuranceAmount = 0;
  let correspondenceAmount = 0;
  /* перебор всех вещей массива excess, с целью узнать кол-во поступивших вещей каждого типа */
  currentAct.reasons.excess.forEach((thing) => {
    thing.values.data.typeIdForSort === "1" && emsAmount++;
    thing.values.data.typeIdForSort === "2" && firstClassAmount++;
    thing.values.data.typeIdForSort === "4" && internationalAmount++;
    thing.values.data.typeIdForSort === "7" && parcelAmount++;
    thing.values.data.typeIdForSort === "3" && insuranceAmount++;
    (thing.values.data.typeIdForSort === "5" ||
      thing.values.data.typeIdForSort === "6") &&
      correspondenceAmount++;
  });
  return {
    emsAmount,
    firstClassAmount,
    internationalAmount,
    parcelAmount,
    insuranceAmount,
    correspondenceAmount,
  };
};
