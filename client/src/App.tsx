import "./App.css";
import { useEffect, useState } from "react";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const res = await fetch("/api/todo");
      const todos: Todo[] = await res.json();
      setTodos(todos);
    }
    getTodos();
  }, []);

  return (
    <div className="container">
      <h1 className="list-title">List It!</h1>
      <div>
        {todos.length > 0 &&
          todos.map((todo) => (
            <div key={todo._id} className="todo">
              <p className="title">{todo.title}</p>
              <div>
                <button className="btn">{todo.completed ? "✔" : "✖"}</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
