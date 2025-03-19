import { useState } from 'react'

import './App.css'

function useCounter(){
  const [count, setCount] = useState(0)

  function increaseCount(){
    setCount(count+1);
  }

  return{
    count: count,
    setCount: increaseCount 
  }
}

function App() {



  return (
    <div>
      <button onClick={useCounter}></button>
    </div>
  )
}

export default App
