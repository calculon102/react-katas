import {fireEvent, render} from '@testing-library/react';
import TicTacToe from './TicTacToe';

describe('TicTacToe component', () => {
    it('Initial game starts with empty field', () => {
        const ticTacToe = render(<TicTacToe />);

        expect(ticTacToe.getByTestId("field0").textContent).toEqual(".");
        expect(ticTacToe.getByTestId("field1").textContent).toEqual(".");
        expect(ticTacToe.getByTestId("field2").textContent).toEqual(".");
        expect(ticTacToe.getByTestId("field3").textContent).toEqual(".");
        expect(ticTacToe.getByTestId("field4").textContent).toEqual(".");
        expect(ticTacToe.getByTestId("field5").textContent).toEqual(".");
        expect(ticTacToe.getByTestId("field6").textContent).toEqual(".");
        expect(ticTacToe.getByTestId("field7").textContent).toEqual(".");
        expect(ticTacToe.getByTestId("field8").textContent).toEqual(".");
    });

    it('X begins, O is second, then X again', () => {
        const ticTacToe = render(<TicTacToe />);

        expect(ticTacToe.getByRole("heading").textContent).toEqual("It's your turn, X")
        fireEvent.click(ticTacToe.getByTestId("field0"));
        expect(ticTacToe.getByRole("heading").textContent).toEqual("It's your turn, O")
        fireEvent.click(ticTacToe.getByTestId("field1"));
        expect(ticTacToe.getByRole("heading").textContent).toEqual("It's your turn, X")
    });
    
    it('Plays to a draw and turn switch between X and O', () => {
        const ticTacToe = render(<TicTacToe />);

        fireEvent.click(ticTacToe.getByTestId("field0"));
        expect(ticTacToe.getByTestId("field0").textContent).toEqual("X");
        
        fireEvent.click(ticTacToe.getByTestId("field1"));
        expect(ticTacToe.getByTestId("field1").textContent).toEqual("O");

        fireEvent.click(ticTacToe.getByTestId("field2"));
        expect(ticTacToe.getByTestId("field2").textContent).toEqual("X");

        fireEvent.click(ticTacToe.getByTestId("field4"));
        expect(ticTacToe.getByTestId("field4").textContent).toEqual("O");

        fireEvent.click(ticTacToe.getByTestId("field7"));
        expect(ticTacToe.getByTestId("field7").textContent).toEqual("X");

        fireEvent.click(ticTacToe.getByTestId("field3"));
        expect(ticTacToe.getByTestId("field3").textContent).toEqual("O");

        fireEvent.click(ticTacToe.getByTestId("field6"));
        expect(ticTacToe.getByTestId("field6").textContent).toEqual("X");

        fireEvent.click(ticTacToe.getByTestId("field8"));
        expect(ticTacToe.getByTestId("field8").textContent).toEqual("O");

        fireEvent.click(ticTacToe.getByTestId("field5"));
        expect(ticTacToe.getByTestId("field5").textContent).toEqual("X");

        expect(ticTacToe.getByRole("heading").textContent).toEqual("Draw!")
    });

    it('X wins with a tic-tac-toe in first row', () => {
        const ticTacToe = render(<TicTacToe />);

        fireEvent.click(ticTacToe.getByTestId("field0"));
        fireEvent.click(ticTacToe.getByTestId("field3"));
        fireEvent.click(ticTacToe.getByTestId("field1"));
        fireEvent.click(ticTacToe.getByTestId("field4"));
        fireEvent.click(ticTacToe.getByTestId("field2"));

        expect(ticTacToe.getByRole("heading").textContent).toEqual("X has won!")
    });

    it('O wins with a tic-tac-toe diagonal from top-left to right', () => {
        const ticTacToe = render(<TicTacToe />);

        fireEvent.click(ticTacToe.getByTestId("field1"));
        fireEvent.click(ticTacToe.getByTestId("field0"));
        fireEvent.click(ticTacToe.getByTestId("field2"));
        fireEvent.click(ticTacToe.getByTestId("field4"));
        fireEvent.click(ticTacToe.getByTestId("field5"));
        fireEvent.click(ticTacToe.getByTestId("field8"));

        expect(ticTacToe.getByRole("heading").textContent).toEqual("O has won!")
    });
});
