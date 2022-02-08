import { Box, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { setParametrsActActionThink } from "../../Store/ActList52";
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
            id: uuidv4(),
            number: "",
            thingAmount: "",
            weight: "",
            date: "",
            time: "",
            ourAddress: ourAddresses.default,
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
     * изменение нашего адреса в накладных при изменении ourAddresses.default(наш адрес по умолчанию)
     */
    useEffect(() => {
        if (actFlightNumbersAndArrivalDateInput.numberFlight !== undefined) {
            setInvoiseListInput(() => {
                const [...newInvoiseListInput] = invoiseListInput;
                newInvoiseListInput.forEach((item) => item.ourAddress = ourAddresses.default);
                return newInvoiseListInput;
            });
        }
    }, [ourAddresses.default]);

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
                    return newCitiAddresses;
                });
                return;
            };
        })
    }, [actFlightNumbersAndArrivalDateInput.numberFlight]);

    /**
     * изменение адреса города, из которого прибыл рейс, в накладных при изменении citiAddresses.default(адрес * * города по умолчанию)
     */
    useEffect(() => {
        if(actFlightNumbersAndArrivalDateInput.numberFlight !== undefined) {
            setInvoiseListInput(() => {
            const [...newInvoiseListInput] = invoiseListInput;
            newInvoiseListInput.forEach((item) => item.citiAddress = citiAddresses.default);
            return newInvoiseListInput;
        });
        }
    }, [citiAddresses.default]);

    const addInvoiseItem = useCallback(() => {
        setInvoiseListInput([...invoiseListInput, {
            id: uuidv4(),
            number: "",
            thingAmount: "",
            weight: "",
            date: "",
            time: "",
            ourAddress: ourAddresses.default,
            citiAddress: citiAddresses.default,
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
        window.scrollTo(0, 0);
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