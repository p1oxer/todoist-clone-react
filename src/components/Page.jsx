import { AddTaskButton } from "./AddTaskButton";

export function Page({ title }) {
    return (
        <div className="page__container">
            <h1 className="page__title">Имя страницы</h1>
            <AddTaskButton />
        </div>
    );
}
