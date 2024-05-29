import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h3>
        Contador= <small>{count}</small>
      </h3>
      <div>
        <button onClick={handleIncrement}>+1</button>
        &nbsp;
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </>
  );
};
