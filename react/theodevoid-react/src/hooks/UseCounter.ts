import { useState } from "react";

// COSTUM HOOK
const useCounter = () => {
  const [count, setcount] = useState(0);

  //   let count = 0;
  const handleReset = () => {
    // alert("RESET");
    setcount(0);
  };

  const handleDecrement = () => {
    // alert("decrement");
    setcount(count - 1);
  };

  const handleIncrement = () => {
    // alert("increment");
    setcount(count + 1);
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};

export default useCounter;
