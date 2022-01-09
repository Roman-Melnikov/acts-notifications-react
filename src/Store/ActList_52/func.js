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
