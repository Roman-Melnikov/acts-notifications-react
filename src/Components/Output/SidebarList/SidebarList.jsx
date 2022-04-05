import { SidebarListItem } from "../SidebarListItem/SidebarListItem";
import React from "react";

export const SidebarList = React.memo(({ sidebarList, type, monitoringDispatchListItemName }) => {
    return (
        <div>
            {sidebarList?.map((sidebarListItem) => <SidebarListItem key={sidebarListItem?.actList_52_itemId ?? sidebarListItem.name}
                sidebarListItem={sidebarListItem} type={type} monitoringDispatchListItemName={monitoringDispatchListItemName} />).reverse()}
        </div>
    )
})