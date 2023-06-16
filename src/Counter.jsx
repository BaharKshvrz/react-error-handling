import { ErrorBoundary } from "react-error-boundary";

const BadCode = ({count}) => {
    if (count === 2) {
        throw Error('The Error has happend!');
    }
}

export const Counter = ({inc, count}) => {
  const onClick = () => {
    inc();
  }

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <BadCode count={count}/>
        <div>Count: {count}</div>
        <button onClick={onClick}>+</button>
    </ErrorBoundary>
  )
}