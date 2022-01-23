import { NavLink } from "react-router-dom";
import { Box } from "@material-ui/core";
import "./style.css";

export const GeneralActListItem = ({ generalListItem }) => {
    return (
        <Box className="general-act-list-item">
            {generalListItem.actList_52_itemId &&
            <NavLink className="general-act-list-item-52" exact to={generalListItem.actList_52_itemId}>
                {generalListItem.actList_52_itemName}
            </NavLink>}
            {generalListItem.actList_51_defective.map((item) => {
                return (
                    <NavLink className=
                        {generalListItem.actList_52_itemId ? "general-act-list-defective-item-51" : "general-act-list-defective-item-51-nouFlight"}
                        exact to={item.idAct}>
                        {item.numberAct}
                    </NavLink>
                )
            })}
        </Box>
    )
}