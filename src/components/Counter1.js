import React, { useState, useEffect } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);
  const [c, setC] = useState(true);

  useEffect(() => {
    console.log("useEffect");
  }, [c]);

  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={()=>setC(!c)}>switch</button>
    </div>
  );
};

export default Counter1;
