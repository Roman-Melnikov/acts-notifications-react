import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AddMonitoringDispatchListItemModal } from "../../Components/AddMonitoringDispatchListItemModal/AddMonitoringDispatchListItemModal";
import { SidebarList } from "../../Components/Output/SidebarList/SidebarList";
import { addMonitoringDispatchListItemActionThink, monitoringDispatchListSelector } from "../../Store/MonitoringDispatchList";
import { WorkingWithDataJournalMonitoringDispatch } from "../WorkingWithDataJournalMonitoringDispatch/WorkingWithDataJournalMonitoringDispatch";
import * as XLSX from 'xlsx/xlsx.mjs';
import "./style.css";
import { addExcelFormula } from "./func";

export const MonitoringDispatch = () => {
    const [typeForSidebar, setTypeForSidebar] = useState("monitoringDispatch");//тип данных для sidebara
    const { monitoringDispatchList } = useSelector(monitoringDispatchListSelector);
    const [monitoringDispatchListItem, setMonitoringDispatchListItem] = useState({});//текущий лист журнала мониторинга
    const [arrForExcel, setArrForExcel] = useState([]);
    let [workbook, setWorkbook] = useState(XLSX.utils.book_new());//создание новой книги Excel
    const dispatch = useDispatch();
    const { monitoringDispatchId } = useParams();//id листа мониторинга отправки

    /**
     * получение текущего листа журнала мониторинга
     * зависит от url-параметра
     * также зависит от monitoringDispatchList, чтобы, когда url-параметр тот же,
     *  обновление текущего листа происходило
     */
    useEffect(() => {
        let newMonitoringDispatchListItem = {};
        setMonitoringDispatchListItem(() => {
            newMonitoringDispatchListItem = monitoringDispatchList?.find((item) => {
                return item.id === monitoringDispatchId;
            });
            if (newMonitoringDispatchListItem === undefined) {
                monitoringDispatchList && (
                    newMonitoringDispatchListItem = monitoringDispatchList[monitoringDispatchList?.length - 1]);
            }
            return { ...newMonitoringDispatchListItem };
        });
    }, [monitoringDispatchId, monitoringDispatchList]);

    /**
     *получение массива для Excel 
     * зависит от текущего листа журнала мониторинга
     */
    useEffect(() => {
        setArrForExcel(() => {
            //сортировка объектов массива
            monitoringDispatchListItem?.data?.sort((a, b) => {
                if (a.direction > b.direction) {
                    return 1;
                }
                if (a.direction < b.direction) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            });

            //создаём новый массив из текущего листа с рейсами, где каждый рейс  будет разделён по направлениям
            let newArrSplitByDirections = []; //пока он пустой

            let newMonitoringDispatchListItem = [...(monitoringDispatchListItem?.data ?? [])];//создаём  новый массив с данными текущего листа,чтобы в store данные не менялись

            //перебираем новый массив с данными текущего листа для разделения каждого рейса по направлениям
            newMonitoringDispatchListItem.forEach((flight) => {
                let directionsObj = {};//объект для получения направлений
                let updateFlight = {};//объект с рейсом разделенным по направлениям 

                //если накладных нет, то добавляем данные рейса в новый массив почти без изменений
                if (flight.invoices.length === 0) {
                    flight = {
                        ...flight,
                        violationDeliveryTime: undefined,
                        warranty: undefined,
                        declaredForDispatch: undefined,
                        emsAmount: undefined,
                        emsWeight: undefined,
                        firstClassAmount: undefined,
                        firstClassWeight: undefined,
                        insuranceAmount: undefined,
                        insuranceWeight: undefined,
                        internationalAmount: undefined,
                        internationalWeight: undefined,
                        correspondenceAmount: undefined,
                        correspondenceWeight: undefined,
                        journalAmount: undefined,
                        journalWeight: undefined,
                        parcelAmount: undefined,
                        parcelWeight: undefined,
                        totalAmount: undefined,
                        totalWeight: undefined,
                        note: undefined,
                        airBags: undefined,
                    };//теперь flight новый объект, store меняться не будет
                    flight.invoices = undefined;
                    newArrSplitByDirections = [...newArrSplitByDirections, flight];
                };

                Array.isArray(flight.invoices) && //проверка на массив
                    flight.invoices.forEach((invoice) => {
                        //определение направлений рейса
                        directionsObj = { ...directionsObj, [invoice.direction]: invoice.direction };
                    });

                //перебираем объект с направлениями
                for (let key in directionsObj) {
                    //перебираем накладные рейса
                    // eslint-disable-next-line no-loop-func
                    flight.invoices.forEach((invoice) => {
                        if (invoice.direction === directionsObj[key]) {
                            updateFlight[directionsObj[key]] = {
                                direction: invoice.direction,
                                numberFlight: flight.numberFlight,
                                //суммирование данных накладных в соответствии с направлениями
                                invoices: `${(updateFlight[directionsObj[key]]?.invoices ?? "")}${invoice.number} `,
                                frequencyMovement: flight.frequencyMovement,
                                takeoffTime: flight.takeoffTime,
                                factDeliveryTime: flight.factDeliveryTime,
                                contractDeliveryTime: flight.contractDeliveryTime,
                                violationDeliveryTime: undefined,
                                warranty: undefined,
                                declaredForDispatch: undefined,
                                //применил toFixed везде, где, при подсчете, используются не целые числа,
                                // т.к. выходило parcelWeight: 10.780000000000001
                                emsAmount: ((updateFlight[directionsObj[key]]?.emsAmount ?? 0)
                                    + invoice.emsAmount) || undefined,
                                emsWeight: (parseFloat(((updateFlight[directionsObj[key]]?.emsWeight ?? 0)
                                    + invoice.emsWeight).toFixed(3))) || undefined,
                                firstClassAmount: ((updateFlight[directionsObj[key]]?.firstClassAmount ?? 0)
                                    + invoice.firstClassAmount) || undefined,
                                firstClassWeight: (parseFloat(((updateFlight[directionsObj[key]]?.firstClassWeight ?? 0)
                                    + invoice.firstClassWeight).toFixed(3))) || undefined,
                                insuranceAmount: ((updateFlight[directionsObj[key]]?.insuranceAmount ?? 0)
                                    + invoice.insuranceAmount) || undefined,
                                insuranceWeight: (parseFloat(((updateFlight[directionsObj[key]]?.insuranceWeight ?? 0)
                                    + invoice.insuranceWeight).toFixed(3))) || undefined,
                                internationalAmount: ((updateFlight[directionsObj[key]]?.internationalAmount ?? 0)
                                    + invoice.internationalAmount) || undefined,
                                internationalWeight: (parseFloat(((updateFlight[directionsObj[key]]?.internationalWeight ?? 0)
                                    + invoice.internationalWeight).toFixed(3))) || undefined,
                                correspondenceAmount: ((updateFlight[directionsObj[key]]?.correspondenceAmount ?? 0)
                                    + invoice.correspondenceAmount) || undefined,
                                correspondenceWeight: (parseFloat(((updateFlight[directionsObj[key]]?.correspondenceWeight ?? 0)
                                    + invoice.correspondenceWeight).toFixed(3))) || undefined,
                                journalAmount: ((updateFlight[directionsObj[key]]?.journalAmount ?? 0)
                                    + invoice.journalAmount) || undefined,
                                journalWeight: (parseFloat(((updateFlight[directionsObj[key]]?.journalWeight ?? 0)
                                    + invoice.journalWeight).toFixed(3))) || undefined,
                                parcelAmount: ((updateFlight[directionsObj[key]]?.parcelAmount ?? 0)
                                    + invoice.parcelAmount) || undefined,
                                parcelWeight: (parseFloat(((updateFlight[directionsObj[key]]?.parcelWeight ?? 0)
                                    + invoice.parcelWeight).toFixed(3))) || undefined,
                                totalAmount: "",
                                totalWeight: (parseFloat(((updateFlight[directionsObj[key]]?.totalWeight ?? 0)
                                    + invoice.totalWeight).toFixed(3))) || undefined,
                                note: "",
                                airBags: ((updateFlight[directionsObj[key]]?.airBags ?? 0)
                                    + invoice.airBags) || undefined,
                            }
                        }
                    });
                };
                newArrSplitByDirections =
                    [...newArrSplitByDirections, ...Object.values(updateFlight)].map((item) => {
                        return Object.values(item);//делаем из объекта массив со значениями объекта
                    });
            });
            return newArrSplitByDirections;
        })
    }, [monitoringDispatchListItem]);

    /**
     * изменение книги Excel
     */
    useEffect(() => {
        setWorkbook(() => {
            // const worksheet = XLSX.utils.aoa_to_sheet([
            //     ["A1", "B1", "C1"],
            //     ["A2", "B2", "C2"],
            //     ["A3", "B3", "C3"]
            //   ]);

            //создаём рабочий лист 
            const worksheet = XLSX.utils.aoa_to_sheet([
                ["", "Сдача почты на самолеты"],
                [
                    "Пункт", "Рейс", "номер накладной", "Частота движения", "Время взлета по расписанию",
                    "Время сдачи почты авиаперевозчику", "Время сдачи почты авиаперевозчику по договору",
                    "Нарушение по времени сдачи почты авиаперевозчику", "Норма гарантированной загрузки",
                    "Заявлено к отправке", "Сдано почты по видам и кг", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "Всего сдано", "", "Примечание", "мешки обменные",
                ],
                [
                    "", "", "", "", "", "", "", "", "", "", "Отправления EMS                  шт            кг",
                    "", "Отправления 1 класса              шт             кг",
                    "", "Страховые мешки               шт             кг", "",
                    "МЖД          мешки               шт              кг", "",
                    "Пис.коррес-понденция           шт               кг",
                    "", "Газетные      пачки                   шт               кг", "",
                    "Посылки                     шт              кг", "", "Количество", "Вес (кг)",
                ],
                ...arrForExcel,
            ]);

            //добавляем в рабочий лист значение ячейки А72 и значения других ячеек относительно ячейки А72
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["Итого"],                             // <-- Write "Итого" to cell А72
                ["Сдача почты на  автомашины"],
                [
                    "ФИО водителя", "Место отправки", "Плановость рейса", "",
                    "Время отправки почты из АОПП по расписанию", "Факт. время отправки почты из АОПП",
                    "Отклонение от установленного расписания", "Причина нарушения расписания",
                    "", "", "Отправлено почты по видам", "", "", "", "", "", "", "", "", "", "", "", "", "",
                    "Всего отправлено", "Примечание",
                ],
                [
                    "", "", "", "", "", "", "", "", "", "", "Отправления EMS", "", "Отправления 1 класса",
                    "", "Страховые мешки", "", "МЖД мешки", "", "Пис.коррес-понденция", "",
                    "контейнера", "", "Посылки", "", "Количество", "Вес (кг)",
                ],
            ], { origin: "A72" });

            //добавляем в рабочий лист значение ячейки А91
            XLSX.utils.sheet_add_aoa(worksheet, [
                ["Итого"],                             // <-- Write "Итого" to cell А91
            ], { origin: "A91" });

            //вызов функции добавления формул
            addExcelFormula(worksheet);
            
            // eslint-disable-next-line react-hooks/exhaustive-deps
            workbook = {
                SheetNames: [],
                Sheets: {},
            };
            XLSX.utils.book_append_sheet(workbook, worksheet, "Лист отправки из React");
            return workbook;
        })
    }, [arrForExcel])

    const addMonitoringDispatchListItem = (newMonitoringDispatchListItemName) => {
        dispatch(addMonitoringDispatchListItemActionThink(newMonitoringDispatchListItemName));
    };

    const exportToExcel = () => {
        XLSX.writeFile(workbook, "dispatcher.xlsx");
    };

    return (
        <Grid container className="monitoring-dispatch">
            <Grid item xs={3} container direction="column" justifyContent="space-between"
                alignItems="center">
                <SidebarList sidebarList={monitoringDispatchList} type={typeForSidebar} />
                <AddMonitoringDispatchListItemModal addMonitoringDispatchListItem={addMonitoringDispatchListItem} />
            </Grid>
            <Grid item xs={9}>
                <WorkingWithDataJournalMonitoringDispatch monitoringDispatchListItem={monitoringDispatchListItem} exportToExcel={exportToExcel} />
            </Grid>
        </Grid>
    )
}