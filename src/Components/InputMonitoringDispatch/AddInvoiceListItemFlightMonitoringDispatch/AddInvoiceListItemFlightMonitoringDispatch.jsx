import { TextField } from "@mui/material";
import "./style.css";

export const AddInvoiceListItemFlightMonitoringDispatch = ({ transitDirection, changeTransitDirection, dataInvoiceListItem,
    changeDataInvoiceListItem, arrForDatalist }) => {
    return (
        <fieldset className="add-invoice-list-item-flight-monitoring-dispatch" >
            <input
                name="transitDirection"
                class="add-invoice-list-item-flight-monitoring-dispatch-input"
                list="transitDirection"
                value={transitDirection}
                onChange={(e) => { changeTransitDirection(e.target.value) }}
            />
            <label class="add-invoice-list-item-flight-monitoring-dispatch-label">Транзитное направление, если оно есть</label>
            <datalist id="transitDirection">
                {arrForDatalist.map((item, index) => {
                    return (
                        <option value={item} key={index} />
                    )
                })}
            </datalist>
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