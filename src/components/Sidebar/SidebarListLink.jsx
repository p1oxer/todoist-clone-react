import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../Icon";

export const SidebarListLink = ({ icon, children, iconSize, iconColor, path }) => {
    return (
        <>
            <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
            >
                <li className="list-sidebar__item">
                    <Icon className={"sidebar-list-link__icon"} icon={icon} size={iconSize} color={iconColor} />
                    {children}
                </li>
            </NavLink>
        </>
    );
};
