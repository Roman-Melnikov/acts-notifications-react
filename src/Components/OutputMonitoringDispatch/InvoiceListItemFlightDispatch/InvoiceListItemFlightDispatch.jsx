import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const InvoiceListItemFlightDispatch = ({invoiceListItemFlight}) => {
    return (
            <ListItem>
                    <ListItemText>{invoiceListItemFlight.number}</ListItemText>
                    <ListItemText>{invoiceListItemFlight.direction}</ListItemText>
                    <ListItemText>{invoiceListItemFlight.totalWeight}</ListItemText>
                    <ListItemButton>
                    <ListItemIcon>
                        <DeleteOutlinedIcon />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
    )
}