import { InvoiseListItemInput } from "../InvoiseListItemInput/InvoiseListItemInput";
import React from "react";
import "./style.css";

export const InvoiseListInput = React.memo(({ invoiseListInput, changeInvoiseListInput }) => {
    return (
        <fieldset className="invoise-list">
            <legend>Общая накладная</legend>
            {invoiseListInput.map((invoiseItem) => {
                return <InvoiseListItemInput invoiseItem={invoiseItem} changeInvoiseListInput={changeInvoiseListInput} />
            })}
        </fieldset>
    )
})