import { useMemo, useState } from "react";

const calculation = (num) => {
  console.log("call calculation");
  for (let i = 0; i < 10000000; i++) {
    num += 1;
  }
  return num;
};

const ExampleUseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const result = useMemo(() => calculation(count), [count]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addToDo = () => {
    setTodos((todos) => [...todos, `New Todo`]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-5">
      <h2>Count: {count}</h2>
      <button
        className="bg-blue-600 hover:bg-blue-700 p-1 text-lg text-white"
        onClick={increment}
      >
        Increment
      </button>
      <h2>Calculation: {result}</h2>
      <hr />
      <h2>To Do List:</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button
        className="bg-blue-600 hover:bg-blue-700 p-1 text-lg text-white"
        onClick={addToDo}
      >
        Add To Do
      </button>
    </div>
  );
};

export default ExampleUseMemo;
