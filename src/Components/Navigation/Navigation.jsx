import { Breadcrumbs } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../Routing/constants";
import "./style.css"

export const Navigation = () => {
  return (
    <Breadcrumbs className="breadcrumbs">
      <NavLink exact activeClassName="selected" to={ROUTES.PARAMETRS_ACT}>ParametrsAct</NavLink>
      <NavLink exact activeClassName="selected" to={ROUTES.ADD_FLIGHT}>AddFlight</NavLink>
    </Breadcrumbs>
  )
}