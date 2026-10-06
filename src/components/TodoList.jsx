import { useState } from "react";
import { useEffect } from "react";

const TodoList = () => {
  const [timer, setTimer] = useState(0);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleComplete = (id) => {
    setTodos(
      todos.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e)),
    );
  };
  // initialiser
  useEffect(() => {
    // call API
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
        );
        const data = await response.json();
        setTodos(data);
        console.log("chargement des données:", data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <>Loading ...</>;
  }

  return (
    <div>
      Timer
      <h1>timer {timer}</h1>
      {todos.map((e) => (
        <div className="">
          <p>{e.id}</p>
          <p>{e.title}</p>
          <p style={{ textDecorationLine: e.completed ? "line-through" : "" }}>
            {e.completed}
          </p>
          <button onClick={() => handleComplete(e.id)}>
            {e.completed ? "do" : "undo"}
          </button>
        </div>
      ))}
      <button onClick={() => setTimer((prevTimer) => prevTimer + 1)}>
        update date
      </button>
    </div>
  );
};

export default TodoList;
