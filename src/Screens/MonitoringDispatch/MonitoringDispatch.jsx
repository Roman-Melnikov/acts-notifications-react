import { Button, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AddMonitoringDispatchListItemModal } from "../../Components/AddMonitoringDispatchListItemModal/AddMonitoringDispatchListItemModal";
import { SidebarList } from "../../Components/Output/SidebarList/SidebarList";
import { addMonitoringDispatchListItemActionThink, monitoringDispatchListSelector } from "../../Store/MonitoringDispatchList";
import { WorkingWithDataJournalMonitoringDispatch } from "../WorkingWithDataJournalMonitoringDispatch/WorkingWithDataJournalMonitoringDispatch";
import * as XLSX from 'xlsx/xlsx.mjs';
import "./style.css";

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
                        violationDeliveryTime: "",
                        warranty: "",
                        declaredForDispatch: "",
                        emsAmount: "",
                        emsWeight: "",
                        firstClassAmount: "",
                        firstClassWeight: "",
                        insuranceAmount: "",
                        insuranceWeight: "",
                        internationalAmount: "",
                        internationalWeight: "",
                        correspondenceAmount: "",
                        correspondenceWeight: "",
                        journalAmount: "",
                        journalWeight: "",
                        parcelAmount: "",
                        parcelWeight: "",
                        totalAmount: "",
                        totalWeight: "",
                        note: "",
                        airBags: "",
                    };//теперь flight новый объект, store меняться не будет
                    flight.invoices = "";
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
                                violationDeliveryTime: "",
                                warranty: "",
                                declaredForDispatch: "",
                                //применил toFixed везде, где, при подсчете, используются не целые числа,
                                // т.к. выходило parcelWeight: 10.780000000000001
                                emsAmount: (updateFlight[directionsObj[key]]?.emsAmount ?? 0)
                                    + invoice.emsAmount,
                                emsWeight: parseFloat(((updateFlight[directionsObj[key]]?.emsWeight ?? 0)
                                    + invoice.emsWeight).toFixed(3)),
                                firstClassAmount: (updateFlight[directionsObj[key]]?.firstClassAmount ?? 0)
                                    + invoice.firstClassAmount,
                                firstClassWeight: parseFloat(((updateFlight[directionsObj[key]]?.firstClassWeight ?? 0)
                                    + invoice.firstClassWeight).toFixed(3)),
                                insuranceAmount: (updateFlight[directionsObj[key]]?.insuranceAmount ?? 0)
                                    + invoice.insuranceAmount,
                                insuranceWeight: parseFloat(((updateFlight[directionsObj[key]]?.insuranceWeight ?? 0)
                                    + invoice.insuranceWeight).toFixed(3)),
                                internationalAmount: (updateFlight[directionsObj[key]]?.internationalAmount ?? 0)
                                    + invoice.internationalAmount,
                                internationalWeight: parseFloat(((updateFlight[directionsObj[key]]?.internationalWeight ?? 0)
                                    + invoice.internationalWeight).toFixed(3)),
                                correspondenceAmount: (updateFlight[directionsObj[key]]?.correspondenceAmount ?? 0)
                                    + invoice.correspondenceAmount,
                                correspondenceWeight: parseFloat(((updateFlight[directionsObj[key]]?.correspondenceWeight ?? 0)
                                    + invoice.correspondenceWeight).toFixed(3)),
                                journalAmount: (updateFlight[directionsObj[key]]?.journalAmount ?? 0)
                                    + invoice.journalAmount,
                                journalWeight: parseFloat(((updateFlight[directionsObj[key]]?.journalWeight ?? 0)
                                    + invoice.journalWeight).toFixed(3)),
                                parcelAmount: (updateFlight[directionsObj[key]]?.parcelAmount ?? 0)
                                    + invoice.parcelAmount,
                                parcelWeight: parseFloat(((updateFlight[directionsObj[key]]?.parcelWeight ?? 0)
                                    + invoice.parcelWeight).toFixed(3)),
                                totalAmount: "",
                                totalWeight: parseFloat(((updateFlight[directionsObj[key]]?.totalWeight ?? 0)
                                    + invoice.totalWeight).toFixed(3)),
                                note: "",
                                airBags: (updateFlight[directionsObj[key]]?.airBags ?? 0)
                                    + invoice.airBags,
                            }
                        }
                    })
                };
                newArrSplitByDirections = [...newArrSplitByDirections, ...Object.values(updateFlight)];
            });
            console.log(newArrSplitByDirections);
            return newArrSplitByDirections;
        })
    }, [monitoringDispatchListItem]);

    console.log(arrForExcel);
    console.log(workbook);
    /**
     * изменение книги Excel
     */
    useEffect(() => {
        setWorkbook(() => {
            // var worksheet = XLSX.utils.aoa_to_sheet([
            //     ["A1", "B1", "C1"],
            //     ["A2", "B2", "C2"],
            //     ["A3", "B3", "C3"]
            //   ]);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            workbook = {
                SheetNames: [],
                Sheets: {},
            };
            let worksheet = XLSX.utils.json_to_sheet([
                { A: "S", B: "h" }
            ], { header: ["A", "B", "C", "D", "E", "F", "G"], skipHeader: true });
            XLSX.utils.book_append_sheet(workbook, worksheet, "отправка");
            return workbook;
        })
    }, [arrForExcel])




    const addMonitoringDispatchListItem = (newMonitoringDispatchListItemName) => {
        dispatch(addMonitoringDispatchListItemActionThink(newMonitoringDispatchListItemName));
    };

    return (
        <Grid container className="monitoring-dispatch">
            <Grid item xs={3} container direction="column" justifyContent="space-between"
                alignItems="center">
                <SidebarList sidebarList={monitoringDispatchList} type={typeForSidebar} />
                <AddMonitoringDispatchListItemModal addMonitoringDispatchListItem={addMonitoringDispatchListItem} />
            </Grid>
            <Grid item xs={9}>
                <WorkingWithDataJournalMonitoringDispatch monitoringDispatchListItem={monitoringDispatchListItem} />
            </Grid>
            <Grid>
                <Button onClick={() => XLSX.writeFile(workbook, "dispatcher.xlsx")} >В Excel</Button>
            </Grid>
        </Grid>
    )
}