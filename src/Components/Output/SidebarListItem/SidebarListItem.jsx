import { NavLink } from "react-router-dom";
import { Box } from "@material-ui/core";
import { ROUTES } from "../../../Routing/constants";
import "./style.css";

export const SidebarListItem = ({ sidebarListItem, type, monitoringDispatchListItemName }) => {

    return (
        <>
            {
                type === "acts" &&
                <Box className="sidebar-list-item">
                    {sidebarListItem.actList_52_itemId &&
                        <NavLink activeClassName="sidebar-selected" className="sidebar-list-item-52"
                            exact to={`${ROUTES.ACT_LIST_ITEM}/${sidebarListItem.actList_52_itemId}`}>
                            {sidebarListItem.actList_52_itemName}
                        </NavLink>}
                    {sidebarListItem.actList_51_defective.map((item) => {
                        return (
                            <NavLink key={item.idAct} activeClassName="sidebar-selected" className=
                                {sidebarListItem.actList_52_itemId ? "sidebar-list-defective-item-51" : "sidebar-list-defective-item-51-nouFlight"}
                                exact to={`${ROUTES.ACT_LIST_ITEM}/${item.idAct}`}>
                                {item.numberAct}
                            </NavLink>
                        )
                    })}
                </Box>
            }
            {
                type === "monitoringDispatch" &&
                <Box className="sidebar-list-item">
                    <NavLink activeClassName="sidebar-selected" className={
                        sidebarListItem.name === monitoringDispatchListItemName ? "sidebar-selected" : "sidebar-list-item-monitoring-dispatch"}
                        exact to={`${ROUTES.MONITORING_DISPATCH}/${sidebarListItem.id}`}>
                        {sidebarListItem.name}
                    </NavLink>
                </Box>
            }
        </>
    )
}