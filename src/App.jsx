import { useState } from 'react'
import './App.css'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1>Counter Using Previous Props</h1>
  <User count={count}/>
  <button style={{backgroundColor:"skyblue"}}onClick={()=>setCount(count+1)}>Update</button>
  </>
  )
}

export default App
