import { useState } from "react";
import { AddTaskButton } from "./AddTaskButton";
import { TaskConstructor } from "./Task/TaskConstructor";
import { Task } from "./Task/Task";
import { v4 as uuidv4 } from "uuid";
export function Page({ title }) {
    const [isTaskConstructor, setTaskConstructor] = useState(false);
    const [todos, setTodos] = useState([]);

    const addTodo = (todo, description) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                task: todo,
                description: description,
                completed: false,
                isEditing: false,
            },
        ]);
        console.log(todos);
    };

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div className="page__container">
            <h1 className="page__title">{title}</h1>
            <ul className="page__todos-list">
                {todos.map((todo, index) => {
                    return <Task deleteTodo={deleteTodo} key={index} todo={todo} />;
                })}
            </ul>
            {isTaskConstructor ? (
                <TaskConstructor
                    addTodo={addTodo}
                    setTaskConstructor={() => setTaskConstructor()}
                    isEditing={false}
                />
            ) : (
                <>
                    <AddTaskButton onClick={() => setTaskConstructor(true)} />
                </>
            )}
        </div>
    );
}
