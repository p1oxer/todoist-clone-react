import { useState } from "react";
import Icon from "../../Icon";
import { SidebarListItem } from "./SidebarListItem";
import { AddTaskButton } from "./AddTaskButton";
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
                        <SidebarListItem
                            iconSize="1.3em"
                            iconColor={iconsWhite}
                            icon="calendar"
                        >
                            Сегодня
                        </SidebarListItem>
                        <SidebarListItem
                            iconSize="1.3em"
                            iconColor={iconsWhite}
                            icon="calendar-1"
                        >
                            Предстоящее
                        </SidebarListItem>
                    </ul>
                    <SidebarSpoiler />
                </div>
            </aside>
        </>
    );
};
