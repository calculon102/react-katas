import { fireEvent, render, screen } from '@testing-library/react';
import States from './States';


describe('States component', () => {
    it('initially displays "Make America code again"', () => {
        render(<States />);
        expect(screen.getByText('Make America code again')).toBeInTheDocument();
    });

    it('Displays "Code for everyone" after state change', () => {
        render(<States />);

        const button = screen.getByText("Unite");
        fireEvent.click(button);

        expect(screen.queryByText('Make America code again')).not.toBeInTheDocument();
        expect(screen.getByText('Code for everyone')).toBeInTheDocument();
    });
});
