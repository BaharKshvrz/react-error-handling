import React from 'react'

const ErrorHandler = (props) => {
  const { error, resetErrorBoundary } = props;

  return (
    <div className="error-page">
       <p>Error! {error.message}</p>
       <button onClick={resetErrorBoundary}>Reload Page</button>
    </div>
  )
}

export default ErrorHandler
