import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [todos, setTodos] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (err) {
      console.error("Error reading localStorage:", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(todos));
    } catch (err) {
      console.error("Error writing localStorage:", err);
    }
  }, [key, todos]);

  return { todos, setTodos };
};

export default useLocalStorage;
