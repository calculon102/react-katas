import { useState } from "react";

function States() {
    const [united, setUnited] = useState<boolean>(false);

    function unite() {
        setUnited(true);
    }

    return (
        <div>
            <div className="status">
                {united && "Code for everyone" || "Make America code again"}
            </div>
            <button onClick={unite}>Unite</button>
        </div>
    );
}

export default States;
