import { InvoiseListItem } from "../InvoiseListItem/InvoiseListItem";
import React from "react";
import "./style.css";

export const InvoiseList = React.memo(( {invoiseList, changeInvoiseList} ) => {
    return (
        <fieldset className="invoise-list">
            <legend>Общая накладная</legend>
            {invoiseList.map((invoiseItem) => {
                return <InvoiseListItem invoiseItem={invoiseItem, changeInvoiseList} />
            })}
        </fieldset>
    )
})