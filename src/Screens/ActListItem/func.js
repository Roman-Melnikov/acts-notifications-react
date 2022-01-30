export const getSurnameUndPositionForFooterActType_51_defective = (
  actList_52,
  actList_51_defectiveItem
) => {
  const actList_52_item = actList_52.find(
    (actList_52_item) =>
      actList_52_item.name === actList_51_defectiveItem.name_52
  );
  return {
    firstPosition: actList_52_item.surnamePosition.firstPosition,
    firstFamily: actList_52_item.surnamePosition.firstFamily,
    secondPosition: actList_52_item.surnamePosition.secondPosition,
    secondFamily: actList_52_item.surnamePosition.secondFamily,
  };
};

export const getTypeThingForFooterActType_51_defective = (
  actList_52,
  actList_51_defectiveItem
) => {
  const actList_52_item = actList_52.find(
    (actList_52_item) =>
      actList_52_item.name === actList_51_defectiveItem.name_52
  );
  return actList_52_item.reasons.defective.find(
    (item) => item.id === actList_51_defectiveItem.idThing
  ).values.data.typeThing;
};
