import { fireEvent, render } from '@testing-library/react';
import WishlistForm from './WishlistForm';

describe('WishlistForm component', () => {
    it('Sends all form-data to given handler', () => {
        const nameExpected="car";
        const wishExpected="I want a red car with four tires";
        const prioExpected=3;

        const send = (name: string, wish: string, priority: number) => {
            expect(name).toEqual(nameExpected);
            expect(wish).toEqual(wishExpected);
            expect(priority).toEqual(prioExpected);
        }

        const form = render(<WishlistForm send={send} />);

        fireEvent.input(form.getByLabelText("Name"), { target: { value: nameExpected } });
        fireEvent.input(form.getByLabelText("Wish"), { target: { value: wishExpected } });
        fireEvent.change(form.getByLabelText("Priority"), { target: {value: prioExpected} });
        fireEvent.click(form.getByText("Submit"))
    });  
});
