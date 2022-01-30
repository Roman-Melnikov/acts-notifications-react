import { Box, Checkbox, Grid, List, ListItem, ListItemIcon, ListItemText, TextField } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.css";

export const ThingDataListItemInput = React.memo((props) => {
    const [id, setId] = useState(null);
    const [checked, setChecked] = useState({ notReceived: false, excess: false, differenceWeight: false, defective: false });

    useEffect(() => {
        setId(props.item.id);
    }, [props.item.id]);

    useEffect(() => {
        props.handleToogleReasons(id, checked);
    }, [checked]);

    const handleToogle = (name) => {
        setChecked((checked) => {
            checked[name] = !checked[name];
            if ((name === "notReceived") && checked.notReceived) {
                checked.excess = false;
                checked.differenceWeight = false;
                checked.defective = false;
            }
            if (checked.excess || checked.differenceWeight || checked.defective) {
                checked.notReceived = false;
            }
            return { ...checked };
        });
    };

    return (
        <Box className="thing-data-item">
            {(props.item.values.data || props.item.values.data === "") &&
                <Grid container>
                    <Grid item xs={8} container>
                        <Grid item xs={12}>
                            <TextField
                                name="data"
                                label="Данные емкости"
                                variant="filled"
                                value={props.item.values.data}
                                onChange={(e) => { props.changeThingData(id, "data", e.target.value) }}
                                multiline="true"
                                fullWidth="true"
                                margin="normal"
                                autoFocus="true"
                                maxRows="4"
                                minRows="4"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {(props.item.values.defective || props.item.values.differenceWeight) && <TextField
                                className="thing-data-description"
                                name="description"
                                label="Описание емкости"
                                variant="filled"
                                value={props.item.values.description}
                                onChange={(e) => { props.changeThingData(id, "description", e.target.value) }}
                                multiline="true"
                                fullWidth="true"
                                margin="normal"
                                maxRows="4"
                                minRows="4"
                            />}
                        </Grid>
                        <Grid item xs={3}>
                            {(props.item.values.defective || props.item.values.differenceWeight) && <TextField
                                className="thing-data-weight"
                                name="giviWeight"
                                label="Подавательский вес"
                                variant="filled"
                                value={props.item.values.giviWeight}
                                onChange={(e) => { props.changeThingData(id, "giviWeight", e.target.value) }}
                                margin="normal"
                                autoFocus="true"
                            />}
                        </Grid>
                        <Grid item xs={6}>
                            {props.item.values.defective && <TextField
                                className="thing-data-numberAct_51_Defective"
                                name="numberAct_51_defectiveAndIdThing"
                                label="Номер акта 51-д"
                                variant="filled"
                                value={props.numberAct_51_defectiveAndIdThing.find((item) => item.id === id)?.numberAct}
                                onChange={(e) => { props.changeNumberAct_51_defective(e, id) }}
                                margin="normal"
                            />}
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <List>
                            <ListItem name="notReceived">
                                <ListItemButton onClick={() => handleToogle("notReceived")}>
                                    <ListItemIcon>
                                        <Checkbox
                                            checked={checked.notReceived}
                                            color="primary"
                                        />
                                    </ListItemIcon>
                                    <ListItemText>Не поступила</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem name="excess">
                                <ListItemButton onClick={() => handleToogle("excess")}>
                                    <ListItemIcon>
                                        <Checkbox
                                            checked={checked.excess}
                                            color="primary"
                                        />
                                    </ListItemIcon>
                                    <ListItemText>Без приписки</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem name="differenceWeight">
                                <ListItemButton onClick={() => handleToogle("differenceWeight")}>
                                    <ListItemIcon>
                                        <Checkbox
                                            checked={checked.differenceWeight}
                                            color="primary"
                                        />
                                    </ListItemIcon>
                                    <ListItemText>Разница в весе</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem name="defective">
                                <ListItemButton onClick={() => handleToogle("defective")}>
                                    <ListItemIcon>
                                        <Checkbox
                                            checked={checked.defective}
                                            color="primary"
                                        />
                                    </ListItemIcon>
                                    <ListItemText>Деффектная емкость</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>}
        </Box>
    )
})

