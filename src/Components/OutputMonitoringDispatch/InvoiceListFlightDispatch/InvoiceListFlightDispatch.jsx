import { List } from "@mui/material";
import { InvoiceListItemFlightDispatch } from "../InvoiceListItemFlightDispatch/InvoiceListItemFlightDispatch";

export const InvoiceListFlightDispatch = ({ invoiceListFlight, numberFlight, invoiceListItemFlightDelete }) => {
    return (
        <List>
            {((invoiceListFlight.length === 0) && (numberFlight !== "")) && <p>Накладных, пока, нет</p>}
            {invoiceListFlight.map((invoiceListItemFlight) => {
                return <InvoiceListItemFlightDispatch key={invoiceListItemFlight.number}
                    invoiceListItemFlight={invoiceListItemFlight}
                    invoiceListItemFlightDelete={invoiceListItemFlightDelete} />
            })}
        </List>
    )
}