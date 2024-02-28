import Icon from "../../Icon";

export function Task({ todo, deleteTodo }) {
    const iconsWhite = "#ffffffc2";

    return (
        <li className="task">
            <button
                onClick={() => deleteTodo(todo.id)}
                type="button"
                className="task__completion-button"
            ></button>
            <div className="task__info">
                <p className="task__name">{todo.task}</p>
                <p className="task__description">{todo.description}</p>
            </div>

            <button type="button" className="task__editing-button">
                <Icon className="pen-icon" icon="pen" size="20px" color={iconsWhite} />
            </button>
        </li>
    );
}
