import {Button} from "@mui/material";
import {useEffect, useState, useCallback} from "react";
import {useDispatch} from "react-redux";
import {
    AddInvoiceListItemFlightMonitoringDispatch
} from "../../Components/InputMonitoringDispatch/AddInvoiceListItemFlightMonitoringDispatch/AddInvoiceListItemFlightMonitoringDispatch";
import {
    NumberFlightAndDirectionMonitoringDispatch
} from "../../Components/InputMonitoringDispatch/NumberFlightAndDirectionMonitoringDispatch/NumberFlightAndDirectionMonitoringDispatch";
import {TimeDispatchCar} from "../../Components/InputMonitoringDispatch/TimeDispatchCar/TimeDispatchCar";
import {
    InvoiceListFlightDispatch
} from "../../Components/OutputMonitoringDispatch/InvoiceListFlightDispatch/InvoiceListFlightDispatch";
import {
    addInvoiceListItemFlightMonitoringDispatchActionThink,
    updateTimeDispatchCarActionThink,
    removeInvoiceListItemFlightMonitoringDispatchActionThink
} from "../../Store/MonitoringDispatchList/action";
import {MONITORING_DISPATCH_LIST_ITEM} from "../../Store/MonitoringDispatchList";
import "./style.css";
import {
    ReferenceMonitoringDispatch
} from "../../Components/OutputMonitoringDispatch/ReferenceMonitoringDispatch/ReferenceMonitoringDispatch";

export const WorkingWithDataJournalMonitoringDispatch = ({monitoringDispatchListItem, exportToExcel}) => {
    const [numberFlight, setNumberFlight] = useState("");
    const [direction, setDirection] = useState("");
    const [transitDirection, setTransitDirection] = useState("");
    const [timeDispatchCar, setTimeDispatchCar] = useState("");
    const [invoiceListFlight, setInvoiceListFlight] = useState([]);
    const [dataInvoiceListItem, setDataInvoiceListItem] = useState("");
    const [arrForDatalist, setArrForDatalist] = useState(MONITORING_DISPATCH_LIST_ITEM);
    const [dataForReferenceDispatch, setDataForReferenceDispatch] = useState({});
    const dispatch = useDispatch();

    /**
     * получение списка накладных рейса
     * этот список меняется:
     *  при изменении numberFlight - номер рейса
     *  при изменении листа мониторинга отправки
     */
    useEffect(() => {
        const currentFlight = monitoringDispatchListItem?.data?.find((item) => {
            return item.numberFlight === numberFlight;
        });
        if (currentFlight) {
            setInvoiceListFlight([...currentFlight.invoices]);
        } else {
            setInvoiceListFlight([]);
        }
    }, [numberFlight, monitoringDispatchListItem]);

    /**
     * изменение направления, при изменении номера рейса
     */
    useEffect(() => {
        const currentFlight = monitoringDispatchListItem?.data?.find((item) => item?.numberFlight === numberFlight);
        if (currentFlight) {
            setDirection(currentFlight.direction);
            return;
        } else {
            setDirection("");
        }
    }, [numberFlight]);

    /**
     * получение времени отправки а/м
     * меняется:
     *   при изменении номера рейса;
     *   при изменении или обновлении текущего листа мониторинга отправки.
     */
    useEffect(() => {
        const currentFlight = monitoringDispatchListItem?.data?.find((item) => {
            return item.numberFlight === numberFlight;
        });
        if (currentFlight) {
            setTimeDispatchCar(currentFlight.factDeliveryTime);
        } else {
            setTimeDispatchCar("такого рейса нет");
        }
    }, [numberFlight, monitoringDispatchListItem]);

    /**
     * обнуляем время сдачи почты на а/м, если массив с накладными пуст
     * это необходимо, если накладные были удалены
     */
    useEffect(() => {
        setTimeDispatchCar(() => {
            return invoiceListFlight.length === 0 ? null : timeDispatchCar;
        });
    }, [invoiceListFlight]);

    /**
     * обнуленное время, предыдущим useEffect-ом, диспатчим в store
     */
    useEffect(() => {
        invoiceListFlight.length === 0 && transferTimeDispatchCarToStore();
    }, [timeDispatchCar]);

    /**
     * отфильтровываем, чтобы не было одинаковых направлений
     * в массиве с транзитными направлениями для datalist
     */
    useEffect(() => {
        const newArrForDatalist = [];
        setArrForDatalist(() => {
            arrForDatalist.forEach((item) => {
                !newArrForDatalist.includes(item.direction) &&
                newArrForDatalist.push(item.direction);
            });
            return newArrForDatalist;
        })
    }, []);

    /**
     * данные для ReferenceMonitoringDispatch
     * зависят от invoiceListFlight
     */
    useEffect(() => {
        setDataForReferenceDispatch(() => {
            let newDataForReferenceDispatch = {};
            if (invoiceListFlight.length >= 1) {
                invoiceListFlight.forEach((invoice) => {
                    newDataForReferenceDispatch.numbers =
                        `${(newDataForReferenceDispatch.numbers === undefined ? "" :
                            `${newDataForReferenceDispatch.numbers},`)}${invoice.number}`;
                    newDataForReferenceDispatch.totalWeight =
                        (newDataForReferenceDispatch.totalWeight ?? 0) + invoice.totalWeight;
                    newDataForReferenceDispatch.emsWeight =
                        (newDataForReferenceDispatch.emsWeight ?? 0) + invoice.emsWeight;
                    newDataForReferenceDispatch.totalAmount =
                        (newDataForReferenceDispatch.totalAmount ?? 0) + invoice.totalAmount;
                });
            }
            ;
            return {...newDataForReferenceDispatch};
        });
    }, [invoiceListFlight]);

    const changeNumberFlightAndDirection = useCallback((name, value) => {
        (name === "numberFlight") && setNumberFlight(value);
        (name === "direction") && setDirection(value);
    }, [numberFlight, direction]);

    const changeTimeDispatchCar = useCallback((value) => {
        setTimeDispatchCar(value);
    }, [timeDispatchCar]);

    const changeTransitDirection = useCallback((value) => {
        setTransitDirection(value);
    }, [transitDirection]);

    const changeDataInvoiceListItem = useCallback((value) => {
        setDataInvoiceListItem(value);
    }, [dataInvoiceListItem]);

    const transferTimeDispatchCarToStore = useCallback(() => {
        dispatch(updateTimeDispatchCarActionThink(monitoringDispatchListItem, numberFlight, timeDispatchCar))
    }, [monitoringDispatchListItem, numberFlight, timeDispatchCar]);

    const transferDataInvoiceListItemToStore = useCallback(() => {
        dispatch(addInvoiceListItemFlightMonitoringDispatchActionThink(monitoringDispatchListItem, numberFlight, transitDirection,
            dataInvoiceListItem, direction));
        setDataInvoiceListItem("");
        setTransitDirection("");
    }, [monitoringDispatchListItem, numberFlight, transitDirection, dataInvoiceListItem, direction]);

    const invoiceListItemFlightDelete = useCallback((numberInvoice) => {
        dispatch(removeInvoiceListItemFlightMonitoringDispatchActionThink(monitoringDispatchListItem,
            numberFlight, numberInvoice))
    }, [invoiceListFlight]);

    return (
        <>
            <span className="monitoring-dispatch-data">
                {monitoringDispatchListItem?.name}
            </span>
            <Button className="monitoring-dispatch-btn-to-excel" variant="contained" color="secondary"
                    onClick={() => exportToExcel()}>
                В Excel
            </Button>
            <NumberFlightAndDirectionMonitoringDispatch numberFlight={numberFlight}
                                                        direction={direction}
                                                        changeNumberFlightAndDirection={changeNumberFlightAndDirection}
            />
            <TimeDispatchCar changeTimeDispatchCar={changeTimeDispatchCar}
                             timeDispatchCar={timeDispatchCar}
                             transferTimeDispatchCarToStore={transferTimeDispatchCarToStore}/>
            <ReferenceMonitoringDispatch dataForReferenceDispatch={dataForReferenceDispatch}/>
            <InvoiceListFlightDispatch invoiceListFlight={invoiceListFlight}
                                       numberFlight={numberFlight}
                                       invoiceListItemFlightDelete={invoiceListItemFlightDelete}/>
            <AddInvoiceListItemFlightMonitoringDispatch changeTransitDirection={changeTransitDirection}
                                                        transitDirection={transitDirection}
                                                        dataInvoiceListItem={dataInvoiceListItem}
                                                        changeDataInvoiceListItem={changeDataInvoiceListItem}
                                                        arrForDatalist={arrForDatalist}/>
            <Button variant="contained" onClick={() => transferDataInvoiceListItemToStore()}>Добавить накладную</Button>
        </>
    )
}