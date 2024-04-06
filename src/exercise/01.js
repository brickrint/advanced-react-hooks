// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const reducer = (state, action) => {
  if (typeof action === 'function') {
    return action(state)
  }

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.step,
      }
    default:
      return state
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [{ count }, setState] = React.useReducer(reducer, {
    count: initialCount
  })

  const increment = () => setState({ type: 'INCREMENT', step })
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
