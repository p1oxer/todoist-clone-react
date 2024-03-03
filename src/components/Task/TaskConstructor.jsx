import { useEffect, useState } from "react";
import { Button } from "../Button";

export function TaskConstructor({
    todo,
    isEditing,
    setTaskConstructor,
    addTodo,
    editTodo,
    closeEditConstructor,
}) {
    const [nameValue, setNameValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    useEffect(() => {
        if (todo) {
            setNameValue(todo.task);
            setDescriptionValue(todo.description);
        }
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(nameValue, descriptionValue);

        setNameValue("");
        setDescriptionValue("");
        setTaskConstructor(false);
    };

    const completeEditing = (e) => {
        e.preventDefault();
        editTodo(nameValue, descriptionValue, todo.id);
        setNameValue("");
        setDescriptionValue("");
    };
    function handleNameInput(e) {
        setNameValue(e.target.value);
    }
    return (
        <form action="" className="edit-task__form form-edit-task">
            <div className="form-edit-task__info">
                <input
                    type="text"
                    className="form-edit-task__input"
                    name="task-name"
                    placeholder="Название задачи"
                    value={nameValue}
                    onChange={handleNameInput}
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
                        onClick={
                            isEditing
                                ? () => closeEditConstructor(todo.id)
                                : () => setTaskConstructor(false)
                        }
                        text={"Отмена"}
                    ></Button>
                    <Button
                        disabled={!nameValue}
                        onClick={isEditing ? completeEditing : handleSubmit}
                        text={isEditing ? "Сохранить" : "Добавить задачу"}
                        isBlue={true}
                    ></Button>
                </div>
            </div>
        </form>
    );
}
