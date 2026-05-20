import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './Form'
import { deleteTodo } from './Store/todoSlice';

function App() {

let data= useSelector(state=>(state.todo));
// console.log(data)

let dispatch = useDispatch();

const [editIndex, setEditIndex] = useState(null);
const [editText, setEditText] = useState("");


let result =data.arr.map((item,ind)=>{
  return (
    <li key={ind}>
      {item} <button onClick={()=>dispatch(deleteTodo(ind))}>delete</button>
      <button onClick={() => {setEditIndex(ind);setEditText(item);}}>
edit
</button>
    </li>
  )
})

  return (
    <div>
      <Form editIndex={editIndex}
        editText={editText}
        setEditIndex={setEditIndex}/>
      {result}

    </div>
  )
}

export default App