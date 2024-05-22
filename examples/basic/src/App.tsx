import { useState } from "react";
import "./App.css";

import { createClient } from "@resync/client";

const resyncClient = createClient();

console.log(resyncClient);

function App() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
        </button>
    );
}

export default App;
