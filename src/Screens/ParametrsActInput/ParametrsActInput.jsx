import { Box, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import faker from "faker";
import { useDispatch, useSelector } from "react-redux";
import { setParametrsActActionThink } from "../../Store/ActList_52";
import { InvoiseListInput } from "../../Components/Input/InvoiseListInput";
import { useCallback, useEffect, useState } from "react";
import { SurnamePositionInput } from "../../Components/Input/SurnamePositionInput";
import { ActFlightNumbersAndArrivalDateInput } from "../../Components/Input/ActFlightNumbersAndArrivalDateInput/ActFlightNumbersAndArrivalDateInput";
import { parametrsFlightsSelector } from "../../Store/ParametrsFlights/selectors";
import { OUR_ADDRESSES } from "../../Constants";
import "./style.css";

export const ParametrsActInput = () => {
    const [invoiseListInput, setInvoiseListInput] = useState([]);
    const [surnamePosition, setSurnamePositionInput] = useState({});
    const [actFlightNumbersAndArrivalDateInput, setActFlightNumbersAndArrivalDateInput] = useState({});
    const [ourAddresses, setOurAddresses] = useState({
        default: OUR_ADDRESSES.PRIMARY,
        outherOurAddresses: (() => {
            const { PRIMARY: toDelete, ...rest } = OUR_ADDRESSES;
            return Object.values(rest);
        })()
    });
    const [citiAddresses, setCitiAddresses] = useState({});

    const dispatch = useDispatch();
    const { parametrsFlights } = useSelector(parametrsFlightsSelector);

    useEffect(() => {
        setInvoiseListInput([{
            id: faker.datatype.uuid(),
            number: "",
            thingAmount: "",
            weight: "",
            date: "",
            time: "",
            ourAddress: null,
            citiAddress: null,
        }])
    }, []);

    /**
     * изменение наших адресов, при изменении номера рейса
     */
    useEffect(() => {
        parametrsFlights.cities.forEach((citi) => {
            if (citi.flights.includes(+actFlightNumbersAndArrivalDateInput.numberFlight)) {
                setOurAddresses(() => {
                    const newOurAddresses = {
                        default: citi.ourAddressDefault,
                        outherOurAddresses: (() => {
                            const newOutherOurAddresses = Object.values(OUR_ADDRESSES);
                            const indexToDelete = newOutherOurAddresses.findIndex((item) => item === citi.ourAddressDefault);
                            newOutherOurAddresses.splice(indexToDelete, 1);
                            return newOutherOurAddresses;
                        })(),
                    }
                    return newOurAddresses;
                });
                return;
            };
        })
    }, [actFlightNumbersAndArrivalDateInput.numberFlight]);

    /**
     * изменение адреса(ов) города из которого прибыл рейс, при изменении номера рейса
     */
    useEffect(() => {
        parametrsFlights.cities.forEach((citi) => {
            if (citi.flights.includes(+actFlightNumbersAndArrivalDateInput.numberFlight)) {
                setCitiAddresses(() => {
                    const newCitiAddresses = {
                        default: citi.fromAddressDefault,
                        allCitiAddresses: citi.fromAddressesAll,
                    }
                    console.log(newCitiAddresses);
                    return newCitiAddresses;
                });
                return;
            };
        })
    }, [actFlightNumbersAndArrivalDateInput.numberFlight]);

    const addInvoiseItem = useCallback(() => {
        setInvoiseListInput([...invoiseListInput, {
            id: faker.datatype.uuid(),
            number: "",
            thingAmount: "",
            weight: "",
            date: "",
            time: "",
            ourAddress: null,
            citiAddress: null,
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
            <InvoiseListInput
                invoiseListInput={invoiseListInput} changeInvoiseListInput={changeInvoiseListInput}
                ourAddresses={ourAddresses} citiAddresses={citiAddresses} />
            <Button className="invoise-list-btn" variant="contained" onClick={addInvoiseItem}>Добавить общую накладную</Button>
            <SurnamePositionInput surnamePosition={surnamePosition} changeSurnamePositionInput={changeSurnamePositionInput} />
            <Button onClick={transferDataToStore} variant="contained" endIcon={<SendIcon />} className="parametrs-act-btn">Отправить данные</Button>
        </Box>
    )
} 