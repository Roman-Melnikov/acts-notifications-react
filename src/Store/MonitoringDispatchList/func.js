export const getNumberInvoice = (dataInvoiceListItem) => {
  const regExp = /\d{6}\s\d{2}\s\d{7}\s\d{1}/gim;
  const arrResult = regExp.exec(dataInvoiceListItem);
  arrResult[0] = arrResult[0].replaceAll(" ", "");
  return arrResult[0];
};

export const getWeightInvoice = (dataInvoiceListItem) => {
  const regExp = /итого\sв\sтом\sчисле\sмешков\sавиа\s{1,2}\d{1,3}\s\d{1,3}\s(.+?)\s/gim;
  const arrResult = regExp.exec(dataInvoiceListItem);
  arrResult[1] = arrResult[1].replaceAll(",", ".");
  return arrResult[1];
};


