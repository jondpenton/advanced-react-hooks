import React from 'react'

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = React.useReducer(
    (prevState, state) => state,
    initialCount,
  )

  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
