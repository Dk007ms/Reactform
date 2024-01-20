import { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4'>
     <Form></Form>
    </div>
  )
}

export default App
