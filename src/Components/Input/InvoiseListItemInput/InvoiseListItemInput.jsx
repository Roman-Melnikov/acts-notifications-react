import { Box } from "@material-ui/core";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./style.css";

export const InvoiseListItemInput = ({ invoiseItem, changeInvoiseListInput, ourAddresses, citiAddresses }) => {
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
                onChange={(e) => { changeInvoiseListInput(id, "number", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="thingAmount"
                label="Количество вещей"
                value={invoiseItem.thingAmount}
                onChange={(e) => { changeInvoiseListInput(id, "thingAmount", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="weight"
                label="Вес"
                value={invoiseItem.weight}
                onChange={(e) => { changeInvoiseListInput(id, "weight", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="date"
                helperText="Дата накладной"
                type="date"
                value={invoiseItem.date}
                onChange={(e) => { changeInvoiseListInput(id, "date", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="time"
                helperText="Время накладной. Указывать, если есть замедление."
                type="time"
                value={invoiseItem.time}
                onChange={(e) => { changeInvoiseListInput(id, "time", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
            <input
                name="ourAddress"
                class="our-address-input"
                list="ourAddress"
                value={invoiseItem.ourAddress ?? ourAddresses.default}
                onChange={(e) => { changeInvoiseListInput(id, "ourAddress", e.target.value) }}
            />
            <label class="our-address-label">Куда адресована</label>
            <datalist id="ourAddress">
                {ourAddresses.outherOurAddresses.map((item) => {
                    return (
                        <option value={item} />
                    )
                })}
            </datalist>
            <input
                name="citiAddress"
                class="citi-address-input"
                list="citiAddress"
                value={invoiseItem.citiAddress ?? citiAddresses.default}
                onChange={(e) => { changeInvoiseListInput(id, "citiAddress", e.target.value) }}
            />
            <label class="citi-address-label">Откуда адресована</label>
            <datalist id="citiAddress">
                {citiAddresses.allCitiAddresses?.map((item) => {
                    return (
                        <option value={item} />
                    )
                })}
            </datalist>
        </Box>
    )
}