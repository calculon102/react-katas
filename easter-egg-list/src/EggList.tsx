interface EggListProps {
    eggs: string[];
};

export const EggList = (props: EggListProps) => {
    return (
        <ul>
            {
                props.eggs.map((value: string) => (
                    <EasterEgg key={value} name={value} />
                ))
            }
        </ul>
    );
};

interface EasterEggProps {
    name: string;
};

export const EasterEgg = (props: EasterEggProps) => {
    return (<li>{props.name}</li>);
};
