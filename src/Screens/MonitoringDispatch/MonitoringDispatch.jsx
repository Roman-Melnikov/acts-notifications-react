import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddMonitoringDispatchListItemModal } from "../../Components/AddMonitoringDispatchListItemModal/AddMonitoringDispatchListItemModal";
import { SidebarList } from "../../Components/Output/SidebarList/SidebarList";
import { addMonitoringDispatchListItemActionThink, monitoringDispatchListSelector } from "../../Store/MonitoringDispatchList";
import { WorkingWithDataJournalMonitoringDispatch } from "../WorkingWithDataJournalMonitoringDispatch/WorkingWithDataJournalMonitoringDispatch";
import "./style.css";

export const MonitoringDispatch = () => {
    const [typeForSidebar, setTypeForSidebar] = useState("monitoringDispatch");//тип данных для sidebara
    const { monitoringDispatchList } = useSelector(monitoringDispatchListSelector);
    const dispatch = useDispatch();

    const addMonitoringDispatchListItem = (newMonitoringDispatchListItemName) => {
        dispatch(addMonitoringDispatchListItemActionThink(newMonitoringDispatchListItemName));
    };

    return (
        <Grid container className="monitoring-dispatch">
            <Grid item xs={3} container direction="column" justifyContent="space-between"
                alignItems="center">
                <SidebarList sidebarList={monitoringDispatchList} type={typeForSidebar} />
                <AddMonitoringDispatchListItemModal addMonitoringDispatchListItem={addMonitoringDispatchListItem} />
            </Grid>
            <Grid item xs={9}>
                <WorkingWithDataJournalMonitoringDispatch monitoringDispatchList={monitoringDispatchList} />
            </Grid>
        </Grid>
    )
}