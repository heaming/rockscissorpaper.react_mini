import reset from "./assets/ic-reset.svg";

function Button({ children, onClick, alt}) {
    return (
        <img src={reset} onClick={onClick} alt={alt}></img>
    );
}

export default Button;