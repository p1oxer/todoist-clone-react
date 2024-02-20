import { useState } from "react";
import Icon from "../Icon";
import { SidebarListItem } from "./SidebarListItem";
import { AddTaskButton } from "./AddTaskButton";

export const Sidebar = ({ isOpened, setSidebarOpened }) => {
    return (
        <>
            <div className={isOpened ? "sidebar sidebar-opened" : "sidebar"}>
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
                            color={"#ffffffc2"}
                        />
                    </button>
                    <ul className="sidebar__list list-sidebar">
                        <AddTaskButton isInSidebar={true} />
                        <SidebarListItem
                            iconSize="1.3em"
                            iconColor={"#ffffffc2"}
                            icon="search"
                        >
                            Поиск
                        </SidebarListItem>
                        <SidebarListItem
                            iconSize="1.3em"
                            iconColor="#ffffffc2"
                            icon="calendar"
                        >
                            Сегодня
                        </SidebarListItem>
                        <SidebarListItem
                            iconSize="1.3em"
                            iconColor="#ffffffc2"
                            icon="calendar-1"
                        >
                            Предстоящее
                        </SidebarListItem>
                    </ul>
                </div>
            </div>
        </>
    );
};
