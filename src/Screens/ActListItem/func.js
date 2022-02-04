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
