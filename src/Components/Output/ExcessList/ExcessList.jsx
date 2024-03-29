import React from "react";
import { ExcessListItem } from "../ExcessListItem/ExcessListItem";
import "./style.css";

export const ExcessList = React.memo(({ excessList, fromGA, withoutDocuments }) => {
    return (
        <>
            {/* {((excessList.length === 1) && !fromGA) &&
                <div class="content-main-excess-list" >
                    <span class="content-main-excess-list-indent">Без </span>
                    <span>приписки к документам </span>
                    {excessList[0].values.data.typeThing !== "РПО" &&
                        <span>поступила емкость </span>}
                    {excessList[0].values.data.typeThing === "РПО" &&
                        <span>поступило </span>}
                    {excessList.map((excessListItem, index) => {
                        return (
                            <>
                                <ExcessListItem
                                    key={excessListItem.id}
                                    dataThing={excessListItem.values.data}
                                    index={index}
                                    excessListLength={excessList.length} />
                            </>)
                    })}
                </div>} */}
            {((excessList.length >= 1) && (!fromGA && !withoutDocuments)) &&
                <div class="content-main-excess-list" >
                    <span class="content-main-excess-list-indent">Без </span>
                    <span>
                        приписки к документам поступили следующие емкости и РПО:
                    </span>
                    {excessList.map((excessListItem, index) => {
                        return (
                            <p class="content-main-excess-list-p-item">
                                <span class="content-main-excess-list-p-item-span-indent">- </span>
                                <ExcessListItem
                                    key={excessListItem.id}
                                    dataThing={excessListItem.values.data}
                                    index={index}
                                    excessListLength={excessList.length} />
                            </p>)
                    })}
                </div>}
            {
                (fromGA || withoutDocuments) && <div class="content-main-excess-list" >
                    {excessList.map((excessListItem, index) => {
                        return (
                            <p class="content-main-excess-list-p-item">
                                <span class="content-main-excess-list-p-item-span-indent">- </span>
                                <ExcessListItem
                                    key={excessListItem.id}
                                    dataThing={excessListItem.values.data}
                                    index={index}
                                    excessListLength={excessList.length} />
                            </p>)
                    })}
                </div>
            }
        </>
    )
})