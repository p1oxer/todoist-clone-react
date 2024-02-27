import { useState } from "react";
import Icon from "../../Icon";
import { SidebarListLink } from "./SidebarListLink";
import { AddTaskButton } from "../AddTaskButton";
import { SidebarSpoiler } from "./SidebarSpoiler";

export const Sidebar = ({ isOpened, setSidebarOpened }) => {
    const iconsWhite = "#ffffffc2";

    return (
        <>
            <aside className={isOpened ? "sidebar sidebar-opened" : "sidebar"}>
                <div className="sidebar__body">
                    <button
                        onClick={() => setSidebarOpened(!isOpened)}
                        title="Открыть/скрыть сайдбар"
                        type="button"
                        className="sidebar__button-toggle"
                    >
                        <Icon
                            className="sidebar-icon"
                            icon="sidebar"
                            size="25px"
                            color={iconsWhite}
                        />
                    </button>
                    <ul className="sidebar__list list-sidebar">
                        <AddTaskButton isInSidebar={true} />
                        <SidebarListItem
                            iconSize="1.3em"
                            iconColor={iconsWhite}
                            icon="search"
                        >
                            Поиск
                        </SidebarListItem>
                        <SidebarListLink
                            iconSize="1.3em"
                            iconColor={iconsWhite}
                            icon="calendar"
                            path={"/today"}
                        >
                            Сегодня
                        </SidebarListLink>
                        <SidebarListLink
                            iconSize="1.3em"
                            iconColor={iconsWhite}
                            icon="calendar-1"
                            path={"/upcoming"}
                        >
                            Предстоящее
                        </SidebarListLink>
                    </ul>
                    <SidebarSpoiler />
                </div>
            </aside>
        </>
    );
};
