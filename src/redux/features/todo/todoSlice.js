import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid generates unique id

const initialSate = {
  todos: [
    {
      id: 1,
      text: "Learn RTK",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialSate,
  reducers: {
    //properties : fucntion
    // state : current state
    //action: values that come to us
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateTodo:(state,action)=>{
   //to update get the id and update the text 
   //const id =action.payload
//    let newTodo={};
//      state.todos.map((todo)=>{
//     if(todo.id===action.payload){
//         newTodo=todo;
//     }

//    })
    // }
  },
});


// export the functionalty 

export const {addTodo,removeTodo} = todoSlice.actions


// export deafault the reducers 

export default todoSlice.reducer;


