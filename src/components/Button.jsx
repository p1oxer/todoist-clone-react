export default function Button({ children, isBlue }) {
    return (
        <button type="button" className="button">
            {children}
        </button>
    );
}
