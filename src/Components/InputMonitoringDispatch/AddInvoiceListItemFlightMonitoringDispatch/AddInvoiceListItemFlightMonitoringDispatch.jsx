import { TextField } from "@mui/material";
import "./style.css";

export const AddInvoiceListItemFlightMonitoringDispatch = ({ transitDirection, changeTransitDirection, dataInvoiceListItem,
    changeDataInvoiceListItem }) => {
    return (
        <fieldset className="add-invoice-list-item-flight-monitoring-dispatch" >
            <TextField
                name="transitDirection"
                label="Транзитное направление, если есть"
                value={transitDirection}
                onChange={(e) => { changeTransitDirection(e.target.value) }}
                fullWidth="true"
                margin="normal"
            />
            <TextField
                name="data"
                label="Данные накладной"
                variant="filled"
                value={dataInvoiceListItem}
                onChange={(e) => { changeDataInvoiceListItem(e.target.value) }}
                multiline="true"
                fullWidth="true"
                margin="normal"
                autoFocus="true"
                maxRows="5"
                minRows="5"
            />
        </fieldset>
    )
}