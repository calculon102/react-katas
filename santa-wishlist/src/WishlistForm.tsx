import { FormEvent, useState } from "react";

interface WishlistFormProps {
    send: (name: string, wish: string, priority: number) => void;
}

const WishlistForm = (props: WishlistFormProps) => {
    const [name, setName] = useState<string>("");
    const [wish, setWish] = useState<string>("");
    const [priority, setPriority] = useState<number>(1);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        props.send(name, wish, priority);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Wish
                <textarea value={wish} onChange={e => setWish(e.target.value)} />
            </label>
            <label>
                Priority
                <select value={priority} onChange={e => setPriority(parseInt(e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default WishlistForm;
