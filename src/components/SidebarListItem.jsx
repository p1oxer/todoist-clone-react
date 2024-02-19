import { useState } from "react";
import Icon from "../Icon";

export const SidebarListItem = ({ icon, children, iconSize, iconColor }) => {

    return (
        <>
            <li className="list-sidebar__item">
                <Icon icon={icon} size={iconSize} color={iconColor} />
                {children}
            </li>
        </>
    );
};
