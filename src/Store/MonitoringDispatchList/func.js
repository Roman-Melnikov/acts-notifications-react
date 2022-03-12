export const getNumberInvoice = (dataInvoiceListItem) => {
  const regExp = /\d{6}\s\d{2}\s\d{7}\s\d{1}/gim;
  const arrResult = regExp.exec(dataInvoiceListItem);
  arrResult[0] = arrResult[0].replaceAll(" ", "");
  return arrResult[0];
};

export const getWeightInvoice = (dataInvoiceListItem) => {
  let regExp =
    //если мешки авиа есть, то работает следующее рег.выражение
    /итого\sв\sтом\sчисле\sмешков\sавиа\s{1,2}\d{1,3}\s\d{1,3}\s(.+?)\s/gim;
  let arrResult = regExp.exec(dataInvoiceListItem);
  //если мешков авиа нет, то будет работать другое рег.выражение
  if (!arrResult) {
    regExp = /итого\sв\sтом\sчисле\sмешков\sавиа\s{1,2}\d{1,3}\s(.+?)\s/gim;
    arrResult = regExp.exec(dataInvoiceListItem);
  }
  arrResult[1] = arrResult[1].replaceAll(",", ".");
  return arrResult[1];
};

export const getDataEms = (dataInvoiceListItem) => {
  const regExp = /мешки\sems\s(\d{1,3})\s(.+)/gim;
  let arrResult = regExp.exec(dataInvoiceListItem);
  if (arrResult !== null) {
    arrResult[2] = arrResult[2].replaceAll(",", ".");
  } else {
    arrResult = [0, 0, 0];
  }
  return arrResult;
};

export const getDataFirstClass = (dataInvoiceListItem) => {
  const regExp = /1-го\sкласса\s\s(\d{1,3})\s(.+)/gim;
  let arrResult = regExp.exec(dataInvoiceListItem);
  if (arrResult !== null) {
    arrResult[2] = arrResult[2].replaceAll(",", ".");
  } else {
    arrResult = [0, 0, 0];
  }
  return arrResult;
};

export const getDataInsurance = (dataInvoiceListItem) => {
  const regExp = /мешки\sсо\sстраховыми\sотправлениями\s\s(\d{1,3})\s(.+)/gim;
  let arrResult = regExp.exec(dataInvoiceListItem);
  if (arrResult !== null) {
    arrResult[2] = arrResult[2].replaceAll(",", ".");
  } else {
    arrResult = [0, 0, 0];
  }
  return arrResult;
};

export const getDataInternational = (dataInvoiceListItem) => {
  const regExp =
    /мешки\sс\sмеждународными\sотправлениями\s\s(\d{1,3})\s(.+)/gim;
  let arrResult = regExp.exec(dataInvoiceListItem);
  if (arrResult !== null) {
    arrResult[2] = arrResult[2].replaceAll(",", ".");
  } else {
    arrResult = [0, 0, 0];
  }
  return arrResult;
};

export const getDataСorrespondence = (dataInvoiceListItem) => {
  //получаем данные о простой корреспонденции
  const regExpSimple =
    /мешки\sс\sпростой\sкорреспонденцией\s(\d{1,3})\s(.+)/gim;
  let simple = regExpSimple.exec(dataInvoiceListItem);
  if (simple !== null) {
    simple[2] = simple[2].replaceAll(",", ".");
  } else {
    simple = [0, 0, 0];
  }

  //получаем данные о заказной корреспонденции
  const regExpСustomized =
    /мешки\sс\sзаказной\sкорреспонденцией\s(\d{1,3})\s(.+)/gim;
  let customized = regExpСustomized.exec(dataInvoiceListItem);
  if (customized !== null) {
    customized[2] = customized[2].replaceAll(",", ".");
  } else {
    customized = [0, 0, 0];
  }

  //получаем данные о правительственных отправлениях
  const regExpGovernment =
    /мешки\sс\sправительственными\sотправлениями\s\s(\d{1,3})\s(.+)/gim;
  let government = regExpGovernment.exec(dataInvoiceListItem);
  if (government !== null) {
    government[2] = government[2].replaceAll(",", ".");
  } else {
    government = [0, 0, 0];
  }

  //суммирование всех видов корреспонденции
  const correspondenceAmount =
    parseFloat(simple[1]) +
    parseFloat(customized[1]) +
    parseFloat(government[1]);
  const correspondenceWeight =
    parseFloat(simple[2]) +
    parseFloat(customized[2]) +
    parseFloat(government[2]);
  const arrResult = [
    correspondenceAmount,
    parseFloat(correspondenceWeight.toFixed(3)),
  ]; //сделал toFixed, потому что в одном из примеров
  //вес после сложения 1.485 5.315 0 выходил 6.800000000000001
  return arrResult;
};

export const getDataJournal = (dataInvoiceListItem) => {
  const regExp = /мешки\sс\sпериодическими\sизданиями\s\s(\d{1,3})\s(.+)/gim;
  let arrResult = regExp.exec(dataInvoiceListItem);
  if (arrResult !== null) {
    arrResult[2] = arrResult[2].replaceAll(",", ".");
  } else {
    arrResult = [0, 0, 0];
  }
  return arrResult;
};

export const getDataParcel = (dataInvoiceListItem) => {
  const regExp = /отправления\sems\s(\d{1,3})\s(.+)/gim; //отправления ems приписываются в группу РПО
  let arrResult = regExp.exec(dataInvoiceListItem);
  if (arrResult !== null) {
    arrResult[2] = arrResult[2].replaceAll(",", ".");
  } else {
    arrResult = [0, 0, 0];
  }
  return arrResult;
};

export const getDataAirBags = (dataInvoiceListItem) => {
  const regExp = /мешков\sавиа\s\s\d{1,3}\s(\d{1,3})\s/gim;
  let arrResult = regExp.exec(dataInvoiceListItem);
  //если рег.выражение не найдено, то мешков авиа 0
  const airBagsAmount = arrResult ? arrResult[1] : 0;
  return airBagsAmount;
};
