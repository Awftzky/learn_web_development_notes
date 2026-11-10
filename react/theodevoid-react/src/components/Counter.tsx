import { useState } from "react";
import useCounter from "../hooks/UseCounter";

const Counter = () => {
  const { count, handleDecrement, handleIncrement, handleReset } = useCounter();
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
      }}
    >
      <button onClick={handleDecrement}>Kurang</button>

      <p>{count}</p>

      <button onClick={handleIncrement}>Tambah</button>

      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Counter;
