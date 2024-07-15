
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
    const text = props.state == FieldState.EMPTY ? " "
               : props.state == FieldState.O ? "O"
               : "X";

    const color = props.state == FieldState.EMPTY ? "bg-white outline-gray-400"
                : props.state == FieldState.O ? "bg-blue-900 outline-blue-400 text-blue-400"
                : "bg-red-900 outline-red-400 text-red-400"; 

    return (
        <button 
            className={`outline-3 outline text-center m-1 h-10 w-10 align-middle text-xl text-bold ${color}`}
            data-testid={props.id}
            disabled={props.state != FieldState.EMPTY}
            onClick={props.onClick}
            type="button">
            {text}
        </button>
    )
}

export default Field;
