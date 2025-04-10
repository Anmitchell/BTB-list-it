import './App.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function getTodos() {
      const res = await fetch('/api/todos');
      const todos = await res.json();

      setMessage(todos.message);
    }
    getTodos();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {message && <p>{message}</p>}
    </div>
  );
}
