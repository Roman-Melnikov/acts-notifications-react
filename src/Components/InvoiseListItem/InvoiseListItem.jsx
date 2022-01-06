import { Box } from "@material-ui/core";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./style.css";

export const InvoiseListItem = ({ invoiseItem, changeInvoiseList }) => {
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
                onChange={(e) => { changeInvoiseList(id, "number", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="thingAmount"
                label="Количество вещей"
                value={invoiseItem.thingAmount}
                onChange={(e) => { changeInvoiseList(id, "thingAmount", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="weight"
                label="Вес"
                value={invoiseItem.weight}
                onChange={(e) => { changeInvoiseList(id, "weight", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="date"
                helperText="Дата накладной"
                type="date"
                value={invoiseItem.date}
                onChange={(e) => { changeInvoiseList(id, "date", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="time"
                helperText="Время накладной"
                type="time"
                value={invoiseItem.time}
                onChange={(e) => { changeInvoiseList(id, "time", e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
        </Box>
    )
}