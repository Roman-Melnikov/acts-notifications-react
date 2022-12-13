import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import { NUMBER_ACT_52_CONSTANT } from "../../../Constants/constants";
import "./style.css";

export const ActFlightNumbersAndArrivalDateInput = ({ actFlightNumbersAndArrivalDateInput, changeActFlightNumbersAndArrivalDateInput,
    handleToogleCheckedFromGa,handleToogleCheckedWithoutDocuments, checkedFromGA, checkedWithoutDocuments }) => {

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
                disabled={checkedFromGA}
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
            </List>
            <List>
                <ListItem>
                    <ListItemButton onClick={() => handleToogleCheckedWithoutDocuments()}>
                        <ListItemIcon>
                            <Checkbox
                                checked={checkedWithoutDocuments}
                                color="primary"
                            />
                        </ListItemIcon>
                        <ListItemText>Без документов, рейс известен</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </fieldset>
    )
}