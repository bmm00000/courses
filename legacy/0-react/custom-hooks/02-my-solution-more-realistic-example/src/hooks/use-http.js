import { useState } from "react";

const useHttp = ({ method, url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);

    let requestConfig = { method };
    if (method === "POST") {
      requestConfig = {
        body: JSON.stringify({ text: taskText }),
        headers: { "Content-Type": "application/json" },
      };
    }

    try {
      const response = await fetch(url, requestConfig);

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (err) {
      setIsLoading(false);
      setError(err.message || "Something went wrong!");
    }
  };

  return { isLoading, error, sendRequest };
};

export default useHttp;
