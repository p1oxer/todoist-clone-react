export function Button({ isBlue, text, onClick }) {
    return (
        <button onClick={onClick} type="button" className={isBlue ? "button _button-blue" : "button"}>
            {text}
        </button>
    );
}
