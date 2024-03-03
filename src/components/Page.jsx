import { useState } from "react";
import { AddTaskButton } from "./AddTaskButton";
import { TaskConstructor } from "./Task/TaskConstructor";
import { Task } from "./Task/Task";
import { v4 as uuidv4 } from "uuid";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
                isEditing: false,
            },
        ]);
    };

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    function closeEditConstructor(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          isEditing: !todo.isEditing,
                      }
                    : todo
            )
        );
    }
    function editTodo(name, description, id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          task: name,
                          description: description,
                          isEditing: !todo.isEditing,
                      }
                    : todo
            )
        );
    }

    function handleEditClick(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          isEditing: !todo.isEditing,
                      }
                    : todo
            )
        );
    }

    return (
        <div className="page__container">
            <h1 className="page__title">{title}</h1>
            <TransitionGroup className="page__todos-list">
                {todos.map((todo, index) =>
                    todo.isEditing ? (
                        <TaskConstructor
                            editTodo={editTodo}
                            todo={todo}
                            isEditing={todo.isEditing}
                            key={todo.id}
                            closeEditConstructor={closeEditConstructor}
                        />
                    ) : (
                        <CSSTransition key={todo.id} timeout={500} classNames="todo">
                            <Task
                                handleEditClick={handleEditClick}
                                deleteTodo={deleteTodo}
                                key={index}
                                todo={todo}
                            />
                        </CSSTransition>
                    )
                )}
            </TransitionGroup>
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
