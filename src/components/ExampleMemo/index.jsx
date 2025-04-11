import { memo, useState } from "react";
import PropTypes from "prop-types";

const ToDoList = memo(({ todos }) => {
  console.log("call todolist");
  return (
    <>
      <div>My Todos List</div>
      {todos.map((todo, index) => {
        return <p key={`${todo}-${index}`}>{todo}</p>;
      })}
    </>
  );
});

ToDoList.displayName = "ToDoList";

ToDoList.propTypes = {
  todos: PropTypes.array,
};

const Counter = memo(({ count }) => {
  console.log("call counter");
  return <p>Count: {count}</p>;
});

Counter.displayName = "Counter";

Counter.propTypes = {
  count: PropTypes.number,
};

const ExampleMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Basketball", "Football"]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-5">
      <ToDoList todos={todos} />
      <button
        className="bg-blue-600 hover:bg-blue-700 p-1 text-lg text-white"
        onClick={() => addTodo("Play Guitar")}
      >
        Add To Do
      </button>
      <Counter count={count} />
      <button
        className="bg-blue-600 hover:bg-blue-700 p-1 text-2xl text-white"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default ExampleMemo;
