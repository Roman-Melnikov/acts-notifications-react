import { SidebarListItem } from "../SidebarListItem/SidebarListItem";
import React from "react";

export const SidebarList = React.memo(({ sidebarList }) => {
    return (
        <div>
            {sidebarList.map((sidebarListItem) => <SidebarListItem key={sidebarListItem.actList_52_itemId} sidebarListItem={sidebarListItem} />)}
        </div>
    )
})