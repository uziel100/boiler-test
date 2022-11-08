import { useState } from 'react'

const useCounter = ({ initialValue = 1, min = 1, max = 10 }) => {
  const [count, setCount] = useState(initialValue)

  const incrementCount = (val = 1) => {
    if (count >= max) return
    setCount(prev => prev + val)
  }

  const decrementCount = (val = -1) => {
    if (count <= min) return
    setCount(prev => prev + val)
  }

  return {
    count,
    incrementCount,
    decrementCount
  }
}

export default useCounter
