import {logDOM} from "@testing-library/react";

export const getDataForActType_51_defective = (
    actList_52,
    actList_51_defectiveItem
) => {
    const actList_52_item = actList_52.find(
        (actList_52_item) =>
            actList_52_item.name === actList_51_defectiveItem.name_52
    );
    const {data, defective, description, differenceWeight, giviWeight} =
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
    /*объединение двух массивов: differenceWeight и defective(в объединении участвуют только вещи с разницей в весе) */
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
                        currentValue.values?.data?.typeId === "1"
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
                        currentValue.values?.data?.typeId === "1"
                            ? currentValue.values.data.actualWeight.replace(",", ".")
                            : 0
                    )
                );
            }, 0) +
            /*сумма разниц, актуального и подавательского весов, вещей из отфильтрованного(вещи не дублирующиеся в excess) массива differenceWeight */
            getThingsFromDifferenceWeightNotDuplicatesInExcess(currentAct).reduce(
                (accum, currentValue) => {
                    if (currentValue.values.data.typeId === "1") {
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
 * получение количества вещей заданного типа для журнала мониторинга
 */
export const getForMonitoringtypeIdAmount = (currentAct, typeId, propertyInInvoice) => {
    let forMonitoringAmount = 0;
    forMonitoringAmount =
        /*сумма количества propertyInInvoice всех общих */
        currentAct.invoiseList.reduce((accum, currentValue) => {
            return (
                accum + parseFloat(currentValue[propertyInInvoice] ?? 0)
            );
        }, 0) -
        /*сумма всех не поступивших typeId */
        currentAct.reasons.notReceived.reduce((accum, currentValue) => {
            return (
                accum +
                parseFloat(
                    currentValue.values?.data?.typeId === typeId
                        ? 1
                        : 0
                )
            );
        }, 0) +
        /*сумма всех поступивших без приписки typeId */
        currentAct.reasons.excess.reduce((accum, currentValue) => {
            return (
                accum +
                parseFloat(
                    currentValue.values?.data?.typeId === typeId
                        ? 1
                        : 0
                )
            );
        }, 0);
    return forMonitoringAmount || " ";
};

/**
 * получение веса вещей заданного типа для журнала мониторинга
 */
export const getForMonitoringtypeIdWeight = (currentAct, typeId, propertyInInvoice) => {
    let forMonitoringWeight = 0;
    forMonitoringWeight =
        /*сумма веса propertyInInvoice всех общих */
        currentAct.invoiseList.reduce((accum, currentValue) => {
            return (
                accum + parseFloat(currentValue[propertyInInvoice]?.replace(",", ".") ?? 0)
            );
        }, 0) -
        /*сумма веса всех не поступивших typeId */
        currentAct.reasons.notReceived.reduce((accum, currentValue) => {
            return (
                accum +
                parseFloat(
                    currentValue.values?.data?.typeId === typeId
                        ? currentValue.values.data.actualWeight.replace(",", ".")
                        : 0
                )
            );
        }, 0) +
        /*сумма веса всех поступивших без приписки typeId */
        currentAct.reasons.excess.reduce((accum, currentValue) => {
            return (
                accum +
                parseFloat(
                    currentValue.values?.data?.typeId === typeId
                        ? currentValue.values.data.actualWeight.replace(",", ".")
                        : 0
                )
            );
        }, 0) +
        /*сумма разниц, актуального и подавательского весов, вещей из отфильтрованного(вещи не дублирующиеся в excess) массива differenceWeight */
        getThingsFromDifferenceWeightNotDuplicatesInExcess(currentAct).reduce(
            (accum, currentValue) => {
                if (currentValue.values.data.typeId === typeId) {
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
    return +forMonitoringWeight.toFixed(3) || " ";
};

/**
 * получение справочной информации для журнала мониторинга, если от ГА
 */
export const getForMonitorihgAdditionalInformationIfFromGa = (currentAct) => {
    let emsAmount = 0;
    let emsWeight = 0;
    let firstClassAmount = 0;
    let firstClassWeight = 0;
    let internationalAmount = 0;
    let internationalWeight = 0;
    let parcelAmount = 0;
    let parcelWeight = 0;
    let insuranceAmount = 0;
    let insuranceWeight = 0;
    let correspondenceAmount = 0;
    let correspondenceWeight = 0;
    /* перебор всех вещей массива excess, с целью узнать кол-во и вес поступивших вещей каждого типа */
    currentAct.reasons.excess.forEach((thing) => {
        switch (thing.values.data.typeId) {
            case "1":
                emsAmount++;
                emsWeight += parseFloat(thing.values.data.actualWeight.replace(",", "."));
                break;
            case "2":
                firstClassAmount++;
                firstClassWeight += parseFloat(thing.values.data.actualWeight.replace(",", "."));
                break;
            case "4":
                internationalAmount++;
                internationalWeight += parseFloat(thing.values.data.actualWeight.replace(",", "."));
                break;
            case "7":
                parcelAmount++;
                parcelWeight += parseFloat(thing.values.data.actualWeight.replace(",", "."));
                break;
            case "3":
                insuranceAmount++;
                insuranceWeight += parseFloat(thing.values.data.actualWeight.replace(",", "."));
                break;
            case "5":
                correspondenceAmount++;
                correspondenceWeight += parseFloat(thing.values.data.actualWeight.replace(",", "."));
                break;
            case "6":
                correspondenceAmount++;
                correspondenceWeight += parseFloat(thing.values.data.actualWeight.replace(",", "."));
                break;
            default:
                alert(`Тип вещи №${thing.values.data.numberThing} не определен`);
        }
    });
    (emsAmount === 0) && (emsAmount = "");
    (emsWeight === 0) && (emsWeight = "");
    (firstClassAmount === 0) && (firstClassAmount = "");
    (firstClassWeight === 0) && (firstClassWeight = "");
    (internationalAmount === 0) && (internationalAmount = "");
    (internationalWeight === 0) && (internationalWeight = "");
    (parcelAmount === 0) && (parcelAmount = "");
    (parcelWeight === 0) && (parcelWeight = "");
    (insuranceAmount === 0) && (insuranceAmount = "");
    (insuranceWeight === 0) && (insuranceWeight = "");
    (correspondenceAmount === 0) && (correspondenceAmount = "");
    (correspondenceWeight === 0) && (correspondenceWeight = "");
    return {
        emsAmount,
        emsWeight,
        firstClassAmount,
        firstClassWeight,
        internationalAmount,
        internationalWeight,
        parcelAmount,
        parcelWeight,
        insuranceAmount,
        insuranceWeight,
        correspondenceAmount,
        correspondenceWeight,
    };
};
