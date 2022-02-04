import { OBJ_FOR_CHECK_TYPE_THING } from ".";

export const getCity = (getState, numberFlight) => {
  const { parametrsFlights: state } = getState();
  let city = null;
  state.parametrsFlights.cities.forEach((item) => {
    if (item.flights.includes(+numberFlight)) {
      city = item.fromWhere;
      return;
    }
  });
  return city;
};

export const getAirLine = (getState, numberFlight) => {
  const { parametrsFlights: state } = getState();
  let airLine = null;
  state.parametrsFlights.airLines.forEach((item) => {
    if (item.flights.includes(+numberFlight)) {
      airLine = item.name;
      return;
    }
  });
  return airLine;
};

export const getContract = (getState, numberFlight) => {
  const { parametrsFlights: state } = getState();
  let contract = null;
  state.parametrsFlights.airLines.forEach((item) => {
    if (item.flights.includes(+numberFlight)) {
      contract = item.contract;
      return;
    }
  });
  return contract;
};

export const getTypeThing = (thingData) => {
  for (let key in OBJ_FOR_CHECK_TYPE_THING) {
    let bool = OBJ_FOR_CHECK_TYPE_THING[key][0].test(thingData);
    if (bool) {
      return {
        typeThing: OBJ_FOR_CHECK_TYPE_THING[key][1],
        typeIdForSort: OBJ_FOR_CHECK_TYPE_THING[key][2],
      };
    }
  }
};

export const getNumberThing = (thingData) => {
  const regExp = /идентификатор\n(.+)/i;
  const arrResult = regExp.exec(thingData);
  arrResult[1] = arrResult[1].replaceAll(" ", "");
  return arrResult[1];
};

export const getActualWeightThing = (thingData) => {
  const regExp = /вес\n(\d{1,3})\sкг\s(\d{1,3})/i;
  const arrResult = regExp.exec(thingData);
  if (+arrResult[2] < 100) {
    arrResult[2] = `0${arrResult[2]}`;
  }
  return [arrResult[1], arrResult[2]].join(",");
};

export const getWhereAddress = (thingData) => {
  const regExp = /куда\n(.+)/i;
  const arrResult = regExp.exec(thingData);
  arrResult[1] = arrResult[1].replace(",", "");
  return arrResult[1];
};

export const getFromAddress = (thingData) => {
  const regExp = /откуда\n(.+)/i;
  const arrResult = regExp.exec(thingData);
  arrResult[1] = arrResult[1].replace(",", "");
  return arrResult[1];
};

export const changeFormatDateUndTimeInInvoiseList = (invoiseList) => {
  invoiseList.forEach((item) => {
    item.date = item.date.split("-").reverse().join(".");
    if (item.time) {//если есть замедление, то здесь стоит время в формате 03:00
      item.time = `${item.time.replace(":", "ч:")}м`;
    }
  });
  return invoiseList;
};
