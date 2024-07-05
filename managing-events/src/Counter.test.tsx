import { fireEvent, render, RenderResult } from '@testing-library/react';
import Counter from './Counter';

describe('Counter test', () => {
    let counter: RenderResult;
    let counterState: HTMLElement;

    beforeEach(() => {
        counter = render(<Counter />);
        counterState = counter.getByRole("heading");
    })

    it('Shows initial counter value', () => {
        expect(counterState.textContent).toEqual("0");
    });

    it('Decrements value on button click', () => {
        fireEvent.click(counter.getByText("Decrement"));
        expect(counterState.textContent).toEqual("-1");
    });

    it('Increments value on button click', () => {
        fireEvent.click(counter.getByText("Increment"));
        expect(counterState.textContent).toEqual("1");
    });
});
