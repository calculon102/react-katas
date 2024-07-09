import { useState } from "react";
import Field, { FieldState } from "./Field";

enum GameState {
    TURN_X,
    TURN_O,
    WIN_X,
    WIN_O,
}

const TicTacToe = () => {
    const [fields, setFields] = useState<FieldState[]>(new Array(9).fill(FieldState.EMPTY));

    const gameState = checkGameState();

    function checkGameState(): GameState {
        if (checkWin(FieldState.X)) {
            return GameState.WIN_X;
        }

        if (checkWin(FieldState.O)) {
            return GameState.WIN_O;
        }

        let countX = 0, countO = 0;

        for (let i = 0; i < fields.length; i++) {
            if (fields[i] == FieldState.X) {
                countX += 1;
            } else if (fields[i] == FieldState.O) {
                countO += 1;
            }
        }

        if (countX == countO) {
            return GameState.TURN_X;
        }

        return GameState.TURN_O;
    }

    function checkWin(who: FieldState) {
        return checkThreeSame(0, 1, 2, who)
            || checkThreeSame(3, 4, 5, who)
            || checkThreeSame(6, 7, 8, who)
            || checkThreeSame(0, 3, 6, who)
            || checkThreeSame(1, 4, 7, who)
            || checkThreeSame(2, 5, 8, who)
            || checkThreeSame(0, 4, 8, who)
            || checkThreeSame(2, 4, 6, who)
    }

    function checkThreeSame(x: number, y: number, z: number, who: FieldState) {
        return fields[x] == who && fields[y] == who && fields[z] == who;
    }

    function handleFieldClick(index: number) {
        if (fields[index] != FieldState.EMPTY) {
            return;
        }

        if (gameState == GameState.TURN_X) {
            const newFields: FieldState[] = fields.map((value, i) => {
                return i == index ? FieldState.X : value;
            })
            setFields(newFields);
        } else if (gameState == GameState.TURN_O) {
            const newFields: FieldState[] = fields.map((value, i) => {
                return i == index ? FieldState.O : value;
            })
            setFields(newFields);
        }
    }

    return (
        <div>
            <h2>{gameState}</h2>
            <div>
                <div>
                    <Field state={fields[0]} onClick={() => handleFieldClick(0)} />
                    <Field state={fields[1]} onClick={() => handleFieldClick(1)} />
                    <Field state={fields[2]} onClick={() => handleFieldClick(2)} />
                </div>
                <div>
                    <Field state={fields[3]} onClick={() => handleFieldClick(3)} />
                    <Field state={fields[4]} onClick={() => handleFieldClick(4)} />
                    <Field state={fields[5]} onClick={() => handleFieldClick(5)} />
                </div>
                <div>
                    <Field state={fields[6]} onClick={() => handleFieldClick(6)} />
                    <Field state={fields[7]} onClick={() => handleFieldClick(7)} />
                    <Field state={fields[8]} onClick={() => handleFieldClick(8)} />
                </div>
            </div>
            <div>
                <button type="button">Reset</button>
            </div>
            <div>
                <button type="button">0</button>
            </div>
        </div>
    )
}

export default TicTacToe;
