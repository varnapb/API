import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import UserTable from './components/UserTable'
import { Route, Routes } from 'react-router-dom'
import Task from './components/Task'
import Listmap from './Listmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Listmap/>
      {/* <Routes> */}
        {/* <Route path='/api' element={<UserTable/>}/> */}
       {/* <Route path='/t' element={<Task/>}/> */}
      {/* </Routes>  */}
     {/* <Task/> */}
    </>
  )
}

export default App
