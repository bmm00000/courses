import { useState, useEffect } from "react";

const useCounter = (direction = "forwards") => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "forwards") {
        setCounter((prevCounter) => prevCounter + 1);
      } else if (direction === "backwards") {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  return counter;
};

export default useCounter;
