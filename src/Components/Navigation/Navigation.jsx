import { Breadcrumbs } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../Routing/constants";
import "./style.css"

export const Navigation = () => {
  return (
    <Breadcrumbs className="breadcrumbs not-print">
      <NavLink exact activeClassName="selected" to={ROUTES.PARAMETRS_ACT}>ParametrsActInput</NavLink>
      <NavLink exact activeClassName="selected" to={ROUTES.PARAMETRS_THINGS}>ParametrsThingsInput</NavLink>
      <NavLink exact activeClassName="selected" to={ROUTES.ACT_LIST_ITEM}>ActListItem</NavLink>
      <NavLink exact activeClassName="selected" to={ROUTES.ADD_FLIGHT}>AddFlight</NavLink>
    </Breadcrumbs>
  )
}