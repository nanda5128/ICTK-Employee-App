import './App.css'
import { Route, Routes } from 'react-router-dom'
import  Home  from './Components/Home'
import EmpForm from './Components/EmpForm'
import Main from './Components/Main'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Main child={<Home/>}/>}/>
        <Route path='/form' element={<Main child={<EmpForm/>}/>}/>
      </Routes>
    </>
  )
}

export default App
