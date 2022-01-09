import { Box, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import faker from "faker";
import { useDispatch } from "react-redux";
import { setParametrsActActionThink } from "../../Store/ActList_52";
import { InvoiseList } from "../../Components/InvoiseList";
import { useCallback, useEffect, useState } from "react";
import { SurnamePosition } from "../../Components/SurnamePosition";
import { ActFlightNumbersAndArrivalDate } from "../../Components/ActFlightNumbersAndArrivalDate/ActFlightNumbersAndArrivalDate";
import "./style.css";

export const ParametrsAct = () => {
    const [invoiseList, setInvoiseList] = useState([]);
    const [surnamePosition, setSurnamePosition] = useState({});
    const [actFlightNumbersAndArrivalDate, setActFlightNumbersAndArrivalDate] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setInvoiseList([{
            id: faker.datatype.uuid(),
            number: "",
            thingAmount: "",
            weight: "",
            date: "",
            time: "",
        }])
    }, []);

    const addInvoiseItem = useCallback(() => {
        setInvoiseList([...invoiseList, {
            id: faker.datatype.uuid(),
            number: "",
            thingAmount: "",
            weight: "",
            date: "",
            time: "",
        }])
    }, [invoiseList]);

    const changeInvoiseList = useCallback((id, name, value) => {
        const [...newInvoiseList] = invoiseList;
        newInvoiseList.forEach((item) => {
            if (item.id === id) {
                item[name] = value;
                return;
            }
        })
        setInvoiseList(newInvoiseList);
    }, [invoiseList]);

    const changeSurnamePosition = useCallback((name, value) => {
        setSurnamePosition({ ...surnamePosition, [name]: value });
    }, [surnamePosition]);

    const changeActFlightNumbersAndArrivalDate = useCallback((name, value) => {
        setActFlightNumbersAndArrivalDate({ ...actFlightNumbersAndArrivalDate, [name]: value });
    }, [actFlightNumbersAndArrivalDate]);

    const transferDataToStore = useCallback((e) => {
        dispatch(setParametrsActActionThink(invoiseList, surnamePosition, actFlightNumbersAndArrivalDate))
    }, [invoiseList, surnamePosition, actFlightNumbersAndArrivalDate]);

    return (
        <Box className="parametrs-act">
            <ActFlightNumbersAndArrivalDate actFlightNumbersAndArrivalDate={actFlightNumbersAndArrivalDate} changeActFlightNumbersAndArrivalDate={changeActFlightNumbersAndArrivalDate} />
            <InvoiseList invoiseList={invoiseList} changeInvoiseList={changeInvoiseList} />
            <Button className="invoise-list-btn" variant="contained" onClick={addInvoiseItem}>Добавить общую накладную</Button>
            <SurnamePosition surnamePosition={surnamePosition} changeSurnamePosition={changeSurnamePosition} />
            <Button onClick={transferDataToStore} variant="contained" endIcon={<SendIcon />} className="parametrs-act-btn">Отправить данные</Button>
        </Box>
    )
} 