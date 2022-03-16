import { Button, Grid, TextField } from "@mui/material";
import "./style.css";

export const TimeDispatchCar = ({ changeTimeDispatchCar, timeDispatchCar,
    transferTimeDispatchCarToStore }) => {
    return (
        <Grid container className="time-dispatch-car" alignItems="center" >
            <Grid item xs={3} className="time-dispatch-car-textfield">
                <TextField
                    name="time"
                    helperText="время отправки а/м"
                    type="time"
                    value={timeDispatchCar || ""}//если будет null, то пустая строка, т.к. значение null почему-то не меняет поле вывода TextField
                    onChange={(e) => { changeTimeDispatchCar(e.target.value) }}
                    fullWidth="true"
                    margin="normal"
                    disabled={timeDispatchCar === "такого рейса нет"}
                />
            </Grid>
            <Grid item xs={3} className="time-dispatch-car-btn">
                <Button variant="contained" disabled={timeDispatchCar === "такого рейса нет"} onClick={() => transferTimeDispatchCarToStore()} >
                    обновить
                </Button>
            </Grid>
        </Grid>
    )
}