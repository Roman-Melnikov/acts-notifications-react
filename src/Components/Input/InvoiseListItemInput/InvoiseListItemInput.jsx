import {Box, Grid, Paper} from "@material-ui/core";
import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import "./style.css";

export const InvoiseListItemInput = ({invoiseItem, changeInvoiseListInput, ourAddresses, citiAddresses}) => {
    const [id, setId] = useState(null);

    useEffect(() => {
        setId(invoiseItem.id);
    }, [invoiseItem]);

    return (
        <Box className="invoise-item">
            <TextField
                name="number"
                label="Номер накладной"
                value={invoiseItem.number}
                onChange={(e) => {
                    changeInvoiseListInput(id, "number", e.target.value)
                }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="thingAmount"
                label="Количество вещей"
                value={invoiseItem.thingAmount}
                onChange={(e) => {
                    changeInvoiseListInput(id, "thingAmount", e.target.value)
                }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="totalWeight"
                label="Вес общий"
                value={invoiseItem.totalWeight}
                onChange={(e) => {
                    changeInvoiseListInput(id, "totalWeight", e.target.value)
                }}
                fullWidth="true"
                margin="normal"
            />
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        name="emsQuantity"
                        label="Кол-во вещей EMS"
                        value={invoiseItem.emsQuantity}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "emsQuantity", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="emsWeight"
                        label="Вес EMS"
                        value={invoiseItem.emsWeight}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "emsWeight", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="firstClassQuantity"
                        label="Кол-во вещей 1-го класса"
                        value={invoiseItem.firstClassQuantity}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "firstClassQuantity", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="firstClassWeight"
                        label="Вес вещей 1-го класса"
                        value={invoiseItem.firstClassWeight}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "firstClassWeight", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="insuranceQuantity"
                        label="Кол-во вещей cо страховыми отправлениями"
                        value={invoiseItem.insuranceQuantity}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "insuranceQuantity", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="insuranceWeight"
                        label="Вес вещей со страховыми отправлениями"
                        value={invoiseItem.insuranceWeight}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "insuranceWeight", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="internationalQuantity"
                        label="Кол-во вещей с международными отправлениями"
                        value={invoiseItem.internationalQuantity}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "internationalQuantity", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="internationalWeight"
                        label="Вес вещей с международными отправлениями"
                        value={invoiseItem.internationalWeight}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "internationalWeight", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="customizedQuantity"
                        label="Кол-во вещей с заказной корреспонденцией"
                        value={invoiseItem.customizedQuantity}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "customizedQuantity", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="customizedWeight"
                        label="Вес вещей с заказной корреспонденцией"
                        value={invoiseItem.customizedWeight}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "customizedWeight", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="simpleQuantity"
                        label="Кол-во вещей с простой корреспонденцией"
                        value={invoiseItem.simpleQuantity}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "simpleQuantity", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="simpleWeight"
                        label="Вес вещей с простой корреспонденцией"
                        value={invoiseItem.simpleWeight}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "simpleWeight", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="parcelQuantity"
                        label="Кол-во РПО"
                        value={invoiseItem.parcelQuantity}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "parcelQuantity", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="parcelWeight"
                        label="Вес РПО"
                        value={invoiseItem.parcelWeight}
                        onChange={(e) => {
                            changeInvoiseListInput(id, "parcelWeight", e.target.value)
                        }}
                        fullWidth="true"
                        margin="normal"
                    />
                </Grid>
            </Grid>
            <TextField
                name="date"
                helperText="Дата накладной"
                type="date"
                value={invoiseItem.date}
                onChange={(e) => {
                    changeInvoiseListInput(id, "date", e.target.value)
                }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="time"
                helperText="Время накладной. Указывать, если есть замедление."
                type="time"
                value={invoiseItem.time}
                onChange={(e) => {
                    changeInvoiseListInput(id, "time", e.target.value)
                }}
                fullWidth="true"
                margin="normal"
            />
            <input
                name="ourAddress"
                class="our-address-input"
                list="ourAddress"
                value={invoiseItem.ourAddress}
                onChange={(e) => {
                    changeInvoiseListInput(id, "ourAddress", e.target.value)
                }}
            />
            <label class="our-address-label">Куда адресована</label>
            <datalist id="ourAddress">
                {ourAddresses.outherOurAddresses.map((item, index) => {
                    return (
                        <option value={item} key={index}/>
                    )
                })}
            </datalist>
            <input
                name="citiAddress"
                class="citi-address-input"
                list="citiAddress"
                value={invoiseItem.citiAddress ?? ""}
                onChange={(e) => {
                    changeInvoiseListInput(id, "citiAddress", e.target.value)
                }}
            />
            <label class="citi-address-label">Откуда адресована</label>
            <datalist id="citiAddress">
                {citiAddresses.allCitiAddresses?.map((item, index) => {
                    return (
                        <option value={item} key={index}/>
                    )
                })}
            </datalist>
        </Box>
    )
}