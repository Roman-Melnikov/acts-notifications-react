import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AddMonitoringDispatchListItemModal } from "../../Components/AddMonitoringDispatchListItemModal/AddMonitoringDispatchListItemModal";
import { SidebarList } from "../../Components/Output/SidebarList/SidebarList";
import { addMonitoringDispatchListItemActionThink, monitoringDispatchListSelector } from "../../Store/MonitoringDispatchList";
import { WorkingWithDataJournalMonitoringDispatch } from "../WorkingWithDataJournalMonitoringDispatch/WorkingWithDataJournalMonitoringDispatch";
import "./style.css";

export const MonitoringDispatch = () => {
    const [typeForSidebar, setTypeForSidebar] = useState("monitoringDispatch");//тип данных для sidebara
    const { monitoringDispatchList } = useSelector(monitoringDispatchListSelector);
    const [monitoringDispatchListItem, setMonitoringDispatchListItem] = useState({});//текущий лист журнала мониторинга
    const dispatch = useDispatch();
    const { monitoringDispatchId } = useParams();//id листа мониторинга отправки

    /**
     * получение текущего листа журнала мониторинга
     * зависит от url-параметра
     * также зависит от monitoringDispatchList, чтобы, когда url-параметр тот же,
     *  обновление текущего листа происходило
     */
     useEffect(() => {
        let newMonitoringDispatchListItem = {};
        setMonitoringDispatchListItem(() => {
            newMonitoringDispatchListItem = monitoringDispatchList?.find((item) => {
                return item.id === monitoringDispatchId;
            });
            if (newMonitoringDispatchListItem === undefined) {
                monitoringDispatchList && (
                    newMonitoringDispatchListItem = monitoringDispatchList[monitoringDispatchList?.length - 1]);
            }
            return {...newMonitoringDispatchListItem};
        });
    }, [monitoringDispatchId, monitoringDispatchList]);

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
                <WorkingWithDataJournalMonitoringDispatch monitoringDispatchListItem={monitoringDispatchListItem} />
            </Grid>
        </Grid>
    )
}