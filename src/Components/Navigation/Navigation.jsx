import { Breadcrumbs } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../Routing/constants";
import "./style.css"

export const Navigation = () => {
  return (
    <Breadcrumbs class="breadcrumbs not-print">
      <NavLink exact activeClassName="selected" className="link" to={ROUTES.PARAMETRS_ACT}>ParametrsActInput</NavLink>
      <NavLink exact activeClassName="selected" className="link" to={ROUTES.PARAMETRS_THINGS}>ParametrsThingsInput</NavLink>
      <NavLink exact activeClassName="selected" className="link" to={ROUTES.ACT_LIST_ITEM}>ActListItem</NavLink>
      <NavLink exact activeClassName="selected" className="link" to={ROUTES.ADD_FLIGHT}>AddFlight</NavLink>
    </Breadcrumbs>
  )
}