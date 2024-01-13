import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((td) => (
          <li key={td.id}>{td.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
