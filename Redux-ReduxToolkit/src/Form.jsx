import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo,updateTodo } from './Store/todoSlice';

function Form({ editIndex, editText, setEditIndex }) {

    const [text, settext] = useState("");
    let dispatch = useDispatch();

function addTask(e){
    e.preventDefault();
    if (editIndex !== null) {
        dispatch(updateTodo({
            index: editIndex,
            value: text
        }));
        setEditIndex(null);
    } else {
        dispatch(addTodo(text));
    }

    settext("");
}

useEffect(() => {
    settext(editText)
}, [editText])


  return (
    <div>
        <form onSubmit={addTask}>
            <input type="text" onChange={(e)=>settext(e.target.value)} value={text}></input>
            {
                    editIndex !== null ?

                        <button type='submit'>
                            Update
                        </button>

                        :

                        <button type='submit'>
                            Add
                        </button>
                }

        </form>
    </div>
  )
}

export default Form