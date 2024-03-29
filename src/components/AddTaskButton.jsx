import { useState } from "react";
import Icon from "../Icon";

export const AddTaskButton = ({ isInSidebar, onClick, }) => {
    return (
        <>
            <button
                onClick={onClick}
                type="submit"
                className={
                    isInSidebar ? "add-task-button _sidebar-add-task" : "add-task-button"
                }
            >
                <Icon icon="plus" size="1em" color="#4857db" />
                Добавить задачу
            </button>
        </>
    );
};
