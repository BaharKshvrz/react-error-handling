# Getting Started with Error Handling

How we can handle errors in React:
- Error boundaries in React
- Using react-error-boundary

## Error boundaries in React
To implement an error boundary component, you need to provide static getDerivedStateFromError which lets you update state in response to an error and display an error message to the user. You can also optionally implement componentDidCatch to add some extra logic, for example, to log the error to an analytics service.

Downside: It just can catch the errors inside the react rendering cycle and doent handle errors somewhere like async functions and so on.


## Using react-error-boundary
Reusable React error boundary component. Supports all React renderers (including React DOM and React Native).
we can use useErrorBoundary() somewhere like inside async functions to make an error.



## Available Scripts

In the project directory, you can run:

### `npm start`
