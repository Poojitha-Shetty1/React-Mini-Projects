import { createSlice } from "@reduxjs/toolkit";

let todoSlice = createSlice({
    name:"todo",
    initialState:{
        arr:[
            "I want to meet someone",
            "I will do this today",
            "I will complete this"
        ]
    },
    reducers:{
        addTodo:function(state,action){
            state.arr.push(action.payload)
        },
        deleteTodo:function(state,action){
            state.arr.splice(action.payload,1)
        },
        updateTodo: function (state, action) {
            let { index, value } = action.payload;
            state.arr[index] = value;
        }

    }
});


let {addTodo,deleteTodo,updateTodo}=todoSlice.actions;

export {addTodo,deleteTodo,updateTodo}
export default todoSlice
