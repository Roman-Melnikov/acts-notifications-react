import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "./constants";
import { Navigation } from "../Components/Navigation";
import { Container } from "@mui/material";
import { ParametrsAct } from "../Screens/ParametrsAct/ParametrsAct";
import { AddFlight } from "../Screens/AddFlight";
import "./style.css";

export const Router = () => {
    return (
        <BrowserRouter>
            <Container className="container">
                <Navigation />
                <Switch>
                    <Route exact path={ROUTES.PARAMETRS_ACT}>
                        <ParametrsAct />
                    </Route>
                    <Route exact path={ROUTES.ADD_FLIGHT}>
                        <AddFlight />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}