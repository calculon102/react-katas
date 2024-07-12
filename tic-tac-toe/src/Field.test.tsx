import { fireEvent, render } from '@testing-library/react';
import Field, { FieldState } from './Field';

describe('Field component', () => {
    function renderField(state: FieldState): HTMLButtonElement {
        const field = render(<Field id="0" state={state} onClick={() => {}} />)
        const button = field.getByRole("button").closest("button");

        expect(button).not.toBeNull();
        if (!button) {
            throw new Error('Button is null');
        }

        return button;
    }

    it('Shows correct text for empty field', () => {
        const emptyField = renderField(FieldState.EMPTY);
        expect(emptyField.textContent).toEqual(".");
    })

    it('Shows correct text for X field', () => {
        const xField = renderField(FieldState.X);
        expect(xField.textContent).toEqual("X");
    })

    it('Shows correct text for O field', () => {
        const oField = renderField(FieldState.O);
        expect(oField.closest("button")?.textContent).toEqual("O");
    })

    it('Button is enabled, when empty', () => {
        const emptyField = renderField(FieldState.EMPTY);
        expect(emptyField.closest('button')?.disabled).toBeFalsy();
    })

    it('Button is disabled, when X', () => {
        const xField = renderField(FieldState.X);
        expect(xField.closest('button')?.disabled).toBeTruthy();
    })

    it('Button is disabled, when O', () => {
        const oField = renderField(FieldState.O);
        expect(oField.closest('button')?.disabled).toBeTruthy();
    })

    it('Calls onClick', () => {
        const spy = jest.fn();

        const field = render(<Field id="0" state={FieldState.EMPTY} onClick={spy} />);

        fireEvent.click(field.getByRole("button"));

        expect(spy).toHaveBeenCalled();
    })
})
