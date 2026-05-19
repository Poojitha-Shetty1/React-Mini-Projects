import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    function handlelogin(e){

        e.preventDefault()

        let storedData = JSON.parse(localStorage.getItem("user"))

        console.log(storedData.emial )
        console.log(storedData.password)

        if(!storedData){
            alert("No user found")
            return
        }

        if(
            email === storedData.emial &&
            password === storedData.password
        ){
            alert("Login Successful")
        }
        else{
            alert("Invalid Email or Password")
        }

    }


  return (
    <div className="container">
    <form className="register-form" onSubmit={handlelogin}>
      <h2>Login Form</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
      />

      <button>Login</button>

    </form>
    </div>
  )
}

export default Login