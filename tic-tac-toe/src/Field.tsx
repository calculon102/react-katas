
export enum FieldState {
    EMPTY,
    X,
    O,
}

interface FieldProps {
    id: string;
    onClick: () => void;
    state: FieldState;
}

const Field = (props: FieldProps) => {
    const text = props.state == FieldState.EMPTY ? "."
               : props.state == FieldState.O ? "O"
               : "X";

    return (
        <button 
            data-testid={props.id}
            disabled={props.state != FieldState.EMPTY}
            onClick={props.onClick}
            type="button">
            {text}
        </button>
    )
}

export default Field;
