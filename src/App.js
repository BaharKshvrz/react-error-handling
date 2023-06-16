import { useState } from "react";
import { Counter } from "./Counter";

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count => count + 1);

  return (
      <div className="App">
          <Counter inc={inc} count={count} />
      </div>
  );
}

