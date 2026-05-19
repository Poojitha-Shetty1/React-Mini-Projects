import React from 'react'
import { useReducer } from 'react'
import { reducer } from './Reducers/countreducer'
import { useState } from 'react'
import './App.css'

function App() {

// const[state,dispatch]=useReducer(reducer,{count:0})
// console.log(state)

// TO DO APP WITH USEREDUCER

const[text,setText]=useState("")
const [index, setindex] = useState(null)

const[state,dispatch]=useReducer(reducer,{arr:[
  "I want to do this @8pm ",
  "I will meet someone",
  "I completed this task"
]})


function addTodo(e){
  e.preventDefault();
  // console.log(text)
  dispatch({type:"ADD",payload:text})
  setText("")
}

function deleted(ind){
let newArr=state.arr.filter((item,index)=>{
  if(ind==index)
    return false;
  return true;  
})
dispatch({type:"DELETE",payload:newArr})
}

function Edittodo(ind){
 setText(state.arr[ind]);
 setindex(ind);
}


function Updatetodo(){
  dispatch({type:"UPDATE",payload:text,index:index})
  setText("")
}



let result=state.arr.map((item,ind)=>{
  return(
    <div className="todo-item" key={ind}>
        <li >
          {item}
        </li>

            <div className="todo-buttons">
        <button onClick={()=>deleted(ind)}>Delete</button>
        <button onClick={()=>Edittodo(ind)}>Edit</button>
    </div>

       
    </div>
  )

})



  return (
    <div  className='container'>

      {/* <button onClick={()=>dispatch({type:"INC"})}>+</button>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"DEC"})}>-</button>
      <button onClick={()=>dispatch({type:"ADD" ,payload:10})}>++</button>
      <button onClick={()=>dispatch({type:"RESET"})}>RESET</button> */}

      <form onSubmit={addTodo}>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
        <button>Add</button>
      </form>
      
      <button onClick={Updatetodo}>Update</button>


        {result}
       
    </div>
  )
}

export default App