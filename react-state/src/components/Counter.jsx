// Importo una herramienta de react. Nos permite crear estados.
// Tiene un valor y un espacio para actualizar ese valor
import {useState} from "react";

const Counter = () => {
    // Así se escriben los estados locales en react.
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>El contador está en: {count}</p>
            <button onClick={() => (setCount(count + 1)) }>Incrementar</button>
            <button onClick={() => (setCount(count - 1)) }>Decrementar</button>
        </div>
    )
}

export default Counter;