import { useState } from "react";
import { Button } from "../Button";

export function TaskConstructor({ isEditing, setTaskConstructor, addTodo }) {
    const [nameValue, setNameValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(nameValue, descriptionValue);

        setNameValue("");
        setDescriptionValue("");
        setTaskConstructor(false)
    };
    return (
        <form action="" className="edit-task__form form-edit-task">
            <div className="form-edit-task__info">
                <input
                    type="text"
                    className="form-edit-task__input"
                    name="task-name"
                    placeholder="Название задачи"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
                <input
                    type="text"
                    className="form-edit-task__input _task-description"
                    name="task-description"
                    placeholder="Описание"
                    value={descriptionValue}
                    onChange={(e) => setDescriptionValue(e.target.value)}
                />
            </div>
            <div className="form-edit-task__bottom">
                <div className="form-edit-task__buttons">
                    <Button
                        onClick={() => setTaskConstructor(false)}
                        text={"Отмена"}
                    ></Button>
                    <Button
                        onClick={handleSubmit}
                        text={isEditing ? "Сохранить" : "Добавить задачу"}
                        isBlue={true}
                    ></Button>
                </div>
            </div>
        </form>
    );
}
