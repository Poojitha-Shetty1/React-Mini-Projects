import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet/>
   </div>
  )
}

export default LandingPage