import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "./constants";
import { Navigation } from "../Components/Navigation";
import { Container } from "@mui/material";
import { ParametrsActInput } from "../Screens/ParametrsActInput/ParametrsActInput";
import { AddFlight } from "../Screens/AddFlight";
import { ParametrsThingsInput } from "../Screens/ParametrsThingsInput/ParametrsThingsInput";
import { GeneralActList } from "../Screens/GeneralActList/GeneralActList";
import "./style.css";

export const Router = () => {
    return (
        <BrowserRouter>
            <Container className="container">
                <Navigation />
                <Switch>
                    <Route exact path={ROUTES.PARAMETRS_ACT}>
                        <ParametrsActInput />
                    </Route>
                    <Route exact path={ROUTES.PARAMETRS_THINGS}>
                        <ParametrsThingsInput />
                    </Route>
                    <Route exact path={ROUTES.GENERAL_ACT_LIST}>
                        <GeneralActList />
                    </Route>
                    <Route exact path={ROUTES.ADD_FLIGHT}>
                        <AddFlight />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}