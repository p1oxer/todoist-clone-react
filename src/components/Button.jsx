import { useState } from "react";

export function Button({ isBlue, text, onClick, disabled}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type="button"
            className={isBlue ? "button _button-blue" : "button"}
        >
            {text}
        </button>
    );
}
