import React from "react";
import { NotReceivedListItem } from "../NotReceivedListItem/NotReceivedListItem";
import "./style.css";

export const NotReceivedList = React.memo(({ notReceivedList }) => {
    return (
        <>
            {/* {notReceivedList.length === 1 &&
                <div class="content-main-not-received-list" >
                    <span class="content-main-not-received-list-indent">При </span>
                    <span>поименной проверке и сличении почты с документами не оказалось </span>
                    {notReceivedList[0].values.data.typeThing !== "РПО" && 
                        <span>емкости </span>}
                    {notReceivedList[0].values.data.typeThing === "РПО" && 
                        <span> </span>}
                    {notReceivedList.map((notReceivedListItem, index) => {
                        return (
                            <>
                                <NotReceivedListItem
                                    key={notReceivedListItem.id}
                                    dataThing={notReceivedListItem.values.data}
                                    index={index}
                                    notReceivedListLength={notReceivedList.length} />
                            </>)
                    })}
                </div>} */}
            {notReceivedList.length >= 1 &&
                <div class="content-main-not-received-list" >
                    <span class="content-main-not-received-list-indent">При </span>
                    <span>
                        поименной проверке и сличении почты с документами не оказалось следующих емкостей и РПО:
                    </span>
                    {notReceivedList.map((notReceivedListItem, index) => {
                        return (
                            <p class="content-main-not-received-list-p-item">
                                <span class="content-main-not-received-list-p-item-span-indent">- </span>
                                <NotReceivedListItem
                                    key={notReceivedListItem.id}
                                    dataThing={notReceivedListItem.values.data}
                                    index={index}
                                    notReceivedListLength={notReceivedList.length} />
                            </p>)
                    })}
                </div>}
        </>
    )
})