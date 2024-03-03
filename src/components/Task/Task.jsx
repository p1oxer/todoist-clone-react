import Icon from "../../Icon";

export function Task({ todo, deleteTodo, handleEditClick, ref }) {
    const iconsWhite = "#ffffffc2";

    return (
        <li ref={ref} className="task">
            <button
                onClick={() => deleteTodo(todo.id)}
                type="button"
                className="task__completion-button"
            ></button>
            <div className="task__info">
                <p className="task__name">{todo.task}</p>
                <p className="task__description">{todo.description}</p>
            </div>

            <button
                onClick={() => handleEditClick(todo.id)}
                type="button"
                className="task__editing-button"
            >
                <Icon className="pen-icon" icon="pen" size="20px" color={iconsWhite} />
            </button>
        </li>
    );
}
