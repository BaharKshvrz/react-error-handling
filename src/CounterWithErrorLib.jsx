import { useErrorBoundary } from "react-error-boundary";

const BadCode = ({count}) => {
    if (count === 2) {
        throw Error('The Error has happend in React error lib!');
    }
}

export const CounterWithErrorLib = ({inc, count}) => {
  const { showBoundary } = useErrorBoundary();

  const onClick = () => {
    inc();
    showBoundary(new Error("Special Error Happend!"));
  }

  return (
    <>
        <BadCode count={count}/>
        <div>Count: {count}</div>
        <button onClick={onClick}>+</button>
    </>
  )
}