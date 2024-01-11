import { useState } from "react";
import s from "./Counter.module.scss";

export function Counter() {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement} className={s.button}>
        increment
      </button>
    </div>
  );
}
