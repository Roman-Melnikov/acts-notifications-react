import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { numberAct_52_constantSelector } from "../../Store/NumberAct_52_constant/selectors";
import "./style.css";

export const ActFlightNumbersAndArrivalDate = ({actFlightNumbersAndArrivalDate, changeActFlightNumbersAndArrivalDate}) => {
    const { numberAct_52_constant } = useSelector(numberAct_52_constantSelector);

    return (
        <fieldset className="act-flight-numbers-arrival">
                        <TextField
                            name="numberAct"
                            value={actFlightNumbersAndArrivalDate.numberAct ?? numberAct_52_constant}
                            onChange={(e) => { changeActFlightNumbersAndArrivalDate("numberAct", e.target.value) }}
                            autoFocus="true"
                            fullWidth="true"
                            margin="normal"
                        />
                        <TextField
                            name="numberFlight"
                            label="Номер рейса"
                            value={actFlightNumbersAndArrivalDate.numberFlight}
                            onChange={(e) => { changeActFlightNumbersAndArrivalDate("numberFlight", e.target.value) }}
                            fullWidth="true"
                            margin="normal"
                        />
                        <TextField
                            name="datetimeArrival"
                            helperText="Дата и время прибытия"
                            type="datetime-local"
                            value={actFlightNumbersAndArrivalDate.datetimeArrival}
                            onChange={(e) => { changeActFlightNumbersAndArrivalDate("datetimeArrival", e.target.value) }}
                            fullWidth="true"
                            margin="normal"
                        />
                    </fieldset>
    )
}