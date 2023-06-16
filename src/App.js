import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./components/ErrorHandler";
import {CounterWithErrorLib} from "./CounterWithErrorLib";

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count => count + 1);

  return (
      <div className="App">
        <ErrorBoundary 
             FallbackComponent={ErrorHandler}
             onError={() => console.log("Error happened!")}
             >
            <CounterWithErrorLib inc={inc} count={count} />
        </ErrorBoundary>
      </div>
  );
}

