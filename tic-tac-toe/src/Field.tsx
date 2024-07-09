
export enum FieldState {
    EMPTY,
    X,
    O,
}

interface FieldProps {
    onClick: () => void;
    state: FieldState;
}

const Field = (props: FieldProps) => {
    const text = props.state == FieldState.EMPTY ? "."
               : props.state == FieldState.O ? "O"
               : "X";

    return (
        <button 
            disabled={props.state != FieldState.EMPTY}
            onClick={props.onClick}
            type="button">
            {text}
        </button>
    )
}

export default Field;
