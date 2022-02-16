import React from "react";
import { CountProvider, useCount } from "./contexts/countContext";

function CountDisplay() {
  const [count] = useCount();
  // console.log("CountDisplay ~ context", context);
  return <div>The count is: {count}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  // const setCount = () => {};
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 rounded-lg text-white font-semibold bg-purple-500"
    >
      Increment count
    </button>
  );
}

const App = () => {
  // const [count, setCount] = useState(0);
  return (
    <div className="p-5 flex items-center justify-center gap-x-5">
      <CountProvider>
        <CountDisplay></CountDisplay>
        <Counter></Counter>
      </CountProvider>
    </div>
  );
};

export default App;
