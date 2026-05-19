import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import Registration from './Components/Registration'
import LandingPage from './Components/LandingPage'
import './App.css';
import Home from './Components/Home'

function App() {
  return (
 <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} >
         <Route index element={<Home></Home>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/reg' element={<Registration/>}></Route>
        </Route>
      </Routes>
 </BrowserRouter>
  )
}

export default App