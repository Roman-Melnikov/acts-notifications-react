export const SET_PARAMETRS_ACT = "ACT_LIST_52::SET_PARAMETRS_ACT";
export const SET_PARAMETRS_THINGS = "ACT_LIST_52::SET_PARAMETRS_THINGS";
export const OBJ_FOR_CHECK_TYPE_THING = {
    ems: [/ems/i, 'EMS', '1'/*id типа вещи, нужно для сортировки вывода нескольких вещей по их типу */],
    firstClass: [/1-ый\sкласс/i, '1-ый класс', '2'],
    international: [/международная/i, 'с международными отправлениями', '4'],
    parcel: [/посылка/i, 'РПО', '7'],
    insurance: [/страховая/i, 'со страховыми отправлениями', '3'],
    customized: [/заказная/i, 'с заказной корреспонденцией', '5'],
    simple: [/простая/i, 'с простой корреспонденцией', '6'],
};