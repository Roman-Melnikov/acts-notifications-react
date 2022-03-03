import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "./constants";
import { Navigation } from "../Components/Navigation";
import { Container } from "@mui/material";
import { ParametrsActInput } from "../Screens/ParametrsActInput/ParametrsActInput";
import { AddFlight } from "../Screens/AddFlight";
import { ParametrsThingsInput } from "../Screens/ParametrsThingsInput/ParametrsThingsInput";
import { ActListItem } from "../Screens/ActListItem/ActListItem";
import { MonitoringDispatch } from "../Screens/MonitoringDispatch/MonitoringDispatch";
import "./style.css";

export const Router = () => {
    return (
        <BrowserRouter>
            <Container className="container" maxWidth="xl">
                <Navigation />
                <Switch>
                    <Route exact path={ROUTES.PARAMETRS_ACT}>
                        <ParametrsActInput />
                    </Route>
                    <Route exact path={ROUTES.PARAMETRS_THINGS}>
                        <ParametrsThingsInput />
                    </Route>
                    <Route exact path={`${ROUTES.ACT_LIST_ITEM}/:actId?`}>
                        <ActListItem />
                    </Route>
                    <Route exact path={ROUTES.ADD_FLIGHT}>
                        <AddFlight />
                    </Route>
                    <Route exact path={`${ROUTES.MONITORING_DISPATCH}/:monitoringDispatchId?`}>
                        <MonitoringDispatch />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}