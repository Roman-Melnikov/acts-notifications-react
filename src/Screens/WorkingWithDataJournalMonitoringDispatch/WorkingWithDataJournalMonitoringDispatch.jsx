import { Button } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { AddInvoiceListItemFlightMonitoringDispatch } from "../../Components/InputMonitoringDispatch/AddInvoiceListItemFlightMonitoringDispatch/AddInvoiceListItemFlightMonitoringDispatch";
import { NumberFlightAndDirectionMonitoringDispatch } from "../../Components/InputMonitoringDispatch/NumberFlightAndDirectionMonitoringDispatch/NumberFlightAndDirectionMonitoringDispatch";
import { TimeDispatchCar } from "../../Components/InputMonitoringDispatch/TimeDispatchCar/TimeDispatchCar";
import { InvoiceListFlightDispatch } from "../../Components/OutputMonitoringDispatch/InvoiceListFlightDispatch/InvoiceListFlightDispatch";
import { addInvoiceListItemFlightMonitoringDispatchActionThink, updateTimeDispatchCarActionThink } from "../../Store/MonitoringDispatchList/action";
import "./style.css";

export const WorkingWithDataJournalMonitoringDispatch = ({ monitoringDispatchListItem }) => {
    const [numberFlight, setNumberFlight] = useState("");
    const [direction, setDirection] = useState("");
    const [transitDirection, setTransitDirection] = useState("");
    const [timeDispatchCar, setTimeDispatchCar] = useState("");
    const [invoiceListFlight, setInvoiceListFlight] = useState([]);
    const [dataInvoiceListItem, setDataInvoiceListItem] = useState("");
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
            setInvoiceListFlight(currentFlight.invoices);
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
    }, [numberFlight, monitoringDispatchListItem])

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

    return (
        <>
            <span className="monitoring-dispatch-data" >
                {monitoringDispatchListItem?.name}
            </span>
            <NumberFlightAndDirectionMonitoringDispatch
                numberFlight={numberFlight}
                direction={direction}
                changeNumberFlightAndDirection={changeNumberFlightAndDirection}
            />
            <TimeDispatchCar changeTimeDispatchCar={changeTimeDispatchCar} timeDispatchCar={timeDispatchCar} transferTimeDispatchCarToStore={transferTimeDispatchCarToStore} />
            <InvoiceListFlightDispatch invoiceListFlight={invoiceListFlight} numberFlight={numberFlight} />
            <AddInvoiceListItemFlightMonitoringDispatch changeTransitDirection={changeTransitDirection} transitDirection={transitDirection}
                dataInvoiceListItem={dataInvoiceListItem} changeDataInvoiceListItem={changeDataInvoiceListItem} />
            <Button variant="contained" onClick={() => transferDataInvoiceListItemToStore()} >Добавить накладную</Button>
        </>
    )
}