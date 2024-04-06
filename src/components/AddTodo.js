import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  //   const [todo, setTodo] = useState([]);
  const dispatch = useDispatch();
  function addTask(e) {
    e.preventDefault();

    dispatch(addTodo(input));
    // input goes to action.payload
    setInput("");
  }
  return (
    <div>
      <h1 id="heading">
        to<span className="do">DO</span> List
      </h1>
      <form onSubmit={addTask}>
        <input
          placeholder="Enter the task"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          type="text"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTodo;

// addtodo here we need to add somthing in the store so
// we will have to us  the dispatch method of react-redux
// dispatch ek reducers ko use kr k store me changes krta h
// wo initialstate wala array he store hai is aap me
