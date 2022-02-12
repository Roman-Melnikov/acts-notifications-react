import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "./constants";
import { Navigation } from "../Components/Navigation";
import { Container } from "@mui/material";
import { ParametrsActInput } from "../Screens/ParametrsActInput/ParametrsActInput";
import { AddFlight } from "../Screens/AddFlight";
import { ParametrsThingsInput } from "../Screens/ParametrsThingsInput/ParametrsThingsInput";
import { ActListItem } from "../Screens/ActListItem/ActListItem";
import "./style.css";

export const Router = () => {
    return (
        <BrowserRouter>
            <Container className="container" >
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
                </Switch>
            </Container>
        </BrowserRouter>
    )
}