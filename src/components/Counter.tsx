import { useState } from "react";
import "./Counter.scss";

export function Counter() {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>increment</button>
    </div>
  );
}
