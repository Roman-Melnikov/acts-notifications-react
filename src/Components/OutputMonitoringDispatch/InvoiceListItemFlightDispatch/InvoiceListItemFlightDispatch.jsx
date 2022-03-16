import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "./style.css";

export const InvoiceListItemFlightDispatch = ({ invoiceListItemFlight, invoiceListItemFlightDelete }) => {
    return (
        <ListItem>
            <ListItemText className="invoice-list-item-flight-dispatch">{invoiceListItemFlight.number}</ListItemText>
            <ListItemText className="invoice-list-item-flight-dispatch">{invoiceListItemFlight.direction}</ListItemText>
            <ListItemText className="invoice-list-item-flight-dispatch">{invoiceListItemFlight.totalAmount}</ListItemText>
            <ListItemText className="invoice-list-item-flight-dispatch">{invoiceListItemFlight.totalWeight}</ListItemText>
            <ListItemButton onClick={() => invoiceListItemFlightDelete(invoiceListItemFlight.number)} >
                <ListItemIcon>
                    <DeleteOutlinedIcon />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    )
}