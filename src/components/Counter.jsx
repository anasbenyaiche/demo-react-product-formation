import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div className="btn-container">
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button
          onClick={() =>
            setCounter((counter) => (counter > 0 ? counter - 1 : 0))
          }
        >
          Decrement
        </button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
