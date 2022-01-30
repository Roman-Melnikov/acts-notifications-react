import { SidebarListItem } from "../SidebarListItem/SidebarListItem"

export const SidebarList = ({ sidebarList }) => {
    return (
        <div>
            {sidebarList.map((sidebarListItem) => <SidebarListItem sidebarListItem={sidebarListItem} /> )}
        </div>
    )
}