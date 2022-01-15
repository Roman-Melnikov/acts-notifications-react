import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { numberAct_52_constantSelector } from "../../../Store/NumberAct_52_constant/selectors";
import "./style.css";

export const ActFlightNumbersAndArrivalDateInput = ({actFlightNumbersAndArrivalDateInput, changeActFlightNumbersAndArrivalDateInput}) => {
    const { numberAct_52_constant } = useSelector(numberAct_52_constantSelector);

    return (
        <fieldset className="act-flight-numbers-arrival">
                        <TextField
                            name="numberAct"
                            value={actFlightNumbersAndArrivalDateInput.numberAct ?? numberAct_52_constant}
                            onChange={(e) => { changeActFlightNumbersAndArrivalDateInput("numberAct", e.target.value) }}
                            autoFocus="true"
                            fullWidth="true"
                            margin="normal"
                        />
                        <TextField
                            name="numberFlight"
                            label="Номер рейса"
                            value={actFlightNumbersAndArrivalDateInput.numberFlight}
                            onChange={(e) => { changeActFlightNumbersAndArrivalDateInput("numberFlight", e.target.value) }}
                            fullWidth="true"
                            margin="normal"
                        />
                        <TextField
                            name="datetimeArrival"
                            helperText="Дата и время прибытия"
                            type="datetime-local"
                            value={actFlightNumbersAndArrivalDateInput.datetimeArrival}
                            onChange={(e) => { changeActFlightNumbersAndArrivalDateInput("datetimeArrival", e.target.value) }}
                            fullWidth="true"
                            margin="normal"
                        />
                    </fieldset>
    )
}