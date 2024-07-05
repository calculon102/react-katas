import { render, RenderResult } from '@testing-library/react';
import { EggList } from './EggList';

describe('Magic egg list', () => {
    let eggList: RenderResult;

    beforeEach(() => {
        eggList = render(<EggList eggs={["Lindt", "Cadbury", "Milka", "Maltesers"]} />);
    });

    it('Has an unordered egg list component', () => {
        expect(eggList.getByRole("list").tagName).toBe("UL");
    }); 

    it('Has right number of list items', () => {
        expect (eggList.getAllByRole("listitem")).toHaveLength(4);
    });


    it('Items of list have the right tag', () => {
        const listItems = eggList.getAllByRole("listitem");

        listItems.forEach((item) => {
            expect(item.tagName).toBe("LI");
        })
    });
    
    it('Has all the eggs in correct order', () => {
        const listItems = eggList.getAllByRole("listitem");

        expect(listItems[0]).toHaveTextContent("Lindt");
        expect(listItems[1]).toHaveTextContent("Cadbury");
        expect(listItems[2]).toHaveTextContent("Milka");
        expect(listItems[3]).toHaveTextContent("Maltesers");
    });
    
});
