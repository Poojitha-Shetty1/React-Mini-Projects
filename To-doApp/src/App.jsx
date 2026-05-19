import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const[arr,setArr]=useState([
    "I will meet someone today",
    "I will do this @8pm",
    "I will complete this todo list today"
  ])

  const[task,settask]=useState("");
  const[updateIndex,setUpdateIndex]=useState(-1);

  function deleteitem(idx){
    let newArr=arr.filter((item,ind)=>{
      if(idx==ind)
        return false;
      return true;
    })
    setArr(newArr)
  }


function addTodo(e){
    e.preventDefault();
    if(task.trim()===" "){
      alert('Enter task');
    }
    let newArr=[...arr,task];
    setArr(newArr)
    settask(" ");
  }
 
  function getData(e){
    // console.log(e.target.value);
    settask(e.target.value);
  }

  function EditTodo(index){
    setUpdateIndex(index);
    settask(arr[index]);
  }

  function updateTodo(e){
    e.preventDefault();
    if(updateIndex===-1)
    {
      alert("selecta task to edit");
      return;
    }
     let newArr=[...arr];
     newArr[updateIndex]=task;
     setArr(newArr);
     settask(" ");
     setUpdateIndex(-1);
  }


  let result=arr.map((item,ind)=>{
    return (
      <div className='details' key={ind}>
           <h2  >{item}</h2>
            <button className='buttonn' onClick={()=>deleteitem(ind)}>delete</button> 
            <button onClick={()=>EditTodo(ind)}>Edit</button>

      </div>
    )
  })


  return (
    <div>
      <div>
            {/* add form */}
            <form className='form' >
              <label>Enter Task</label>
              <input type="text" onChange={getData} value={task}></input>
              {/* <button onClick={addTodo}>Add</button>
              <button onClick={updateTodo}>update</button> */}

              {
                updateIndex==-1?<button onClick={addTodo}>Add</button>
                :<button onClick={updateTodo}>update</button> 
              }
            </form>

      </div>
   <div>
    {result}
   </div>
   </div>
  )
}

export default App
