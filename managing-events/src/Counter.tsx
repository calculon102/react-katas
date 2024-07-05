import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    function handleDecrement() {
        setCount(count - 1);
    }

    function handleIncrement() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleDecrement} type="button">
                Decrement
            </button>
            <button onClick={handleIncrement} type="button">
                Increment
            </button>
        </div>
    )
}

export default Counter;
