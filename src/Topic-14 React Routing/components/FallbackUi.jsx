import React from 'react'
import { getErrorMessage } from 'react-error-boundary'

const FallbackUi = ({error, resetErrorBoundary}) => {
  return (
    <div>
        <h2>Oops, Something went Wrong</h2>
        <h3>Error: {getErrorMessage(error)}</h3>
        <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}

export default FallbackUi

