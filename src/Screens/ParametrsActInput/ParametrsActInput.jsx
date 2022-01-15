import { Box, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import faker from "faker";
import { useDispatch } from "react-redux";
import { setParametrsActActionThink } from "../../Store/ActList_52";
import { InvoiseListInput } from "../../Components/Input/InvoiseListInput";
import { useCallback, useEffect, useState } from "react";
import { SurnamePositionInput } from "../../Components/Input/SurnamePositionInput";
import { ActFlightNumbersAndArrivalDateInput } from "../../Components/Input/ActFlightNumbersAndArrivalDateInput/ActFlightNumbersAndArrivalDateInput";
import "./style.css";

export const ParametrsActInput = () => {
    const [invoiseListInput, setInvoiseListInput] = useState([]);
    const [surnamePosition, setSurnamePositionInput] = useState({});
    const [actFlightNumbersAndArrivalDateInput, setActFlightNumbersAndArrivalDateInput] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setInvoiseListInput([{
            id: faker.datatype.uuid(),
            number: "",
            thingAmount: "",
            weight: "",
            date: "",
            time: "",
        }])
    }, []);

    const addInvoiseItem = useCallback(() => {
        setInvoiseListInput([...invoiseListInput, {
            id: faker.datatype.uuid(),
            number: "",
            thingAmount: "",
            weight: "",
            date: "",
            time: "",
        }])
    }, [invoiseListInput]);

    const changeInvoiseListInput = useCallback((id, name, value) => {
        const [...newInvoiseListInput] = invoiseListInput;
        newInvoiseListInput.forEach((item) => {
            if (item.id === id) {
                item[name] = value;
                return;
            }
        })
        setInvoiseListInput(newInvoiseListInput);
    }, [invoiseListInput]);

    const changeSurnamePositionInput = useCallback((name, value) => {
        setSurnamePositionInput({ ...surnamePosition, [name]: value });
    }, [surnamePosition]);

    const changeActFlightNumbersAndArrivalDateInput = useCallback((name, value) => {
        setActFlightNumbersAndArrivalDateInput({ ...actFlightNumbersAndArrivalDateInput, [name]: value });
    }, [actFlightNumbersAndArrivalDateInput]);

    const transferDataToStore = useCallback(() => {
        dispatch(setParametrsActActionThink(invoiseListInput, surnamePosition, actFlightNumbersAndArrivalDateInput))
    }, [invoiseListInput, surnamePosition, actFlightNumbersAndArrivalDateInput]);

    return (
        <Box className="parametrs-act">
            <ActFlightNumbersAndArrivalDateInput actFlightNumbersAndArrivalDateInput={actFlightNumbersAndArrivalDateInput} changeActFlightNumbersAndArrivalDateInput={changeActFlightNumbersAndArrivalDateInput} />
            <InvoiseListInput invoiseListInput={invoiseListInput} changeInvoiseListInput={changeInvoiseListInput} />
            <Button className="invoise-list-btn" variant="contained" onClick={addInvoiseItem}>Добавить общую накладную</Button>
            <SurnamePositionInput surnamePosition={surnamePosition} changeSurnamePositionInput={changeSurnamePositionInput} />
            <Button onClick={transferDataToStore} variant="contained" endIcon={<SendIcon />} className="parametrs-act-btn">Отправить данные</Button>
        </Box>
    )
} 