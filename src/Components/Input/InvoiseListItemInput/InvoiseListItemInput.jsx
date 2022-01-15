import { Box } from "@material-ui/core";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./style.css";

export const InvoiseListItemInput = ({ invoiseItem, changeInvoiseListInput }) => {
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
        </Box>
    )
}