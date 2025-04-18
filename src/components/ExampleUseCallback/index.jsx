import { useCallback, useState } from "react";
import Search from "./Search";

const dataUsers = ["Dos", "Nino", "Rizaldy"];

const ExampleUseCallback = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(dataUsers);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const shuffleUsers = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  const handleSearch = useCallback(
    (text) => {
      const filterUsers = dataUsers.filter((user) => {
        return user.toLocaleLowerCase().includes(text);
      });

      setUsers(filterUsers);
    },
    [users]
  );

  return (
    <>
      <div>
        <h3>Count: {count}</h3>
        <button
          className="bg-blue-600 hover:bg-blue-700 p-1 text-lg text-white"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
      <br></br>
      <div>
        <Search onChange={handleSearch} />
        <ul className="list-disc pl-6">
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
        <button
          className="bg-blue-600 hover:bg-blue-700 p-1 text-lg text-white"
          onClick={() => setUsers(shuffleUsers(dataUsers))}
        >
          Shuffle
        </button>
      </div>
    </>
  );
};

export default ExampleUseCallback;
