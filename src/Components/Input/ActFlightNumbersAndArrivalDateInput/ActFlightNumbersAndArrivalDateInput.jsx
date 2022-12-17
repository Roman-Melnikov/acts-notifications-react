import {Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField} from "@mui/material";
import {NUMBER_ACT_52_CONSTANT} from "../../../Constants/constants";
import "./style.css";

export const ActFlightNumbersAndArrivalDateInput = ({
                                                        actFlightNumbersAndArrivalDateInput,
                                                        changeActFlightNumbersAndArrivalDateInput,
                                                        changeTransportationScheduleOfRefund,
                                                        handleToogleCheckedFromGa,
                                                        handleToogleCheckedWithoutDocuments,
                                                        handleToogleCheckedRefund,
                                                        checkedFromGA,
                                                        checkedWithoutDocuments,
                                                        checkedRefund,
                                                        transportationScheduleOfRefund
                                                    }) => {

    return (
        <fieldset className="act-flight-numbers-arrival">
            <TextField
                name="numberAct"
                value={actFlightNumbersAndArrivalDateInput.numberAct ?? NUMBER_ACT_52_CONSTANT}
                onChange={(e) => {
                    changeActFlightNumbersAndArrivalDateInput("numberAct", e.target.value)
                }}
                autoFocus="true"
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="numberFlight"
                label="Номер рейса"
                value={actFlightNumbersAndArrivalDateInput.numberFlight}
                onChange={(e) => {
                    changeActFlightNumbersAndArrivalDateInput("numberFlight", e.target.value)
                }}
                fullWidth="true"
                margin="normal"
                disabled={checkedFromGA}
            />
            <TextField
                name="datetimeArrival"
                helperText="Дата и время прибытия"
                type="datetime-local"
                value={actFlightNumbersAndArrivalDateInput.datetimeArrival}
                onChange={(e) => {
                    changeActFlightNumbersAndArrivalDateInput("datetimeArrival", e.target.value)
                }}
                fullWidth="true"
                margin="normal"
            />
            <List>
                <ListItem>
                    <ListItemButton onClick={() => handleToogleCheckedFromGa()}>
                        <ListItemIcon>
                            <Checkbox
                                checked={checkedFromGA}
                                color="primary"
                            />
                        </ListItemIcon>
                        <ListItemText>От органов ГА</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={() => handleToogleCheckedWithoutDocuments()}>
                        <ListItemIcon>
                            <Checkbox
                                checked={checkedWithoutDocuments}
                                color="primary"
                            />
                        </ListItemIcon>
                        <ListItemText>Рейс без документов</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={() => handleToogleCheckedRefund()}>
                        <ListItemIcon>
                            <Checkbox
                                checked={checkedRefund}
                                color="primary"
                            />
                        </ListItemIcon>
                        <ListItemText>Возврат</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            {checkedRefund && <TextField
                name="datetimeDelivery"
                helperText="Дата и время сдачи"
                type="datetime-local"
                value={actFlightNumbersAndArrivalDateInput.datetimeDelivery}
                onChange={(e) => {
                    changeActFlightNumbersAndArrivalDateInput("datetimeDelivery", e.target.value)
                }}
                fullWidth="true"
                margin="normal"
            />
            }
            {checkedRefund && <TextField
                name="transportationScheduleOfRefund"
                helperText="Месяц и год в соответствии с графиком"
                type="month"
                value={transportationScheduleOfRefund.transportationScheduleOfRefund}
                onChange={(e) => {
                    changeTransportationScheduleOfRefund("transportationScheduleOfRefund", e.target.value)
                }}
                fullWidth="true"
                margin="normal"
            />
            }
        </fieldset>
    )
}