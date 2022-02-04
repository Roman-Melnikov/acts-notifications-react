import { TextField } from "@mui/material";
import { NUMBER_ACT_52_CONSTANT } from "../../../Constants/constants";
import "./style.css";

export const ActFlightNumbersAndArrivalDateInput = ({actFlightNumbersAndArrivalDateInput, changeActFlightNumbersAndArrivalDateInput}) => {

    return (
        <fieldset className="act-flight-numbers-arrival">
                        <TextField
                            name="numberAct"
                            value={actFlightNumbersAndArrivalDateInput.numberAct ?? NUMBER_ACT_52_CONSTANT}
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