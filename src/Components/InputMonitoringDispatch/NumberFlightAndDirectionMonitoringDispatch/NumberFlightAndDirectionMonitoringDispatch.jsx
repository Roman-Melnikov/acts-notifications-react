import { TextField } from "@mui/material";
import "./style.css";

export const NumberFlightAndDirectionMonitoringDispatch = ({ numberFlight, direction,
    changeNumberFlightAndDirection }) => {

    return (
        <fieldset className="monitoring-dispatch-number-flight-and-direction">
            <TextField
                name="numberFlight"
                label="Номер рейса"
                value={numberFlight}
                onChange={(e) => { changeNumberFlightAndDirection("numberFlight", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="direction"
                label="Направление"
                value={direction}
                onChange={(e) => { changeNumberFlightAndDirection("direction", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
        </fieldset>
    )
}