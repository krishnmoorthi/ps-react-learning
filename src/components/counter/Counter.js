import { useState } from "react";
import './Counter.css';

//babel
function Counter() {
    const [count, setCount] = useState(10); //hook defined in react js

    //function to increment the counter
    const increment = () => {
        setCount(count + 1);
    };

    //function to increment the counter
    const decrement = () => {
        setCount(count - 1);
    };

    //function to increment the counter
    const reset = () => {
        setCount(0);
    };

    return (
        <div className="Counter">
        <h4> counter: {count}</h4>
        {/* button to increment the counter */ }
        <button onClick={increment}> Increment</button>
        {/* button to decrement the counter */ }
        <button onClick={decrement}> Decrement</button>
        {/* button to reset the counter */ }
        <button onClick={reset}> Reset</button>
        </div>
    );
}

export default Counter;
