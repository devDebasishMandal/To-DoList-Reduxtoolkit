import React from 'react'
import {useDispatch,useSelector } from 'react-redux';
import { removeTodo } from '../redux/features/todo/todoSlice';

const Todos = () => {
// in useSelector we get the acess of state 
// inside a callback
// getting the value of current state in todos.
const todos= useSelector((state) => state.todos);

const dispatch= useDispatch();



  return (
    <div id="todoContainer">
      <ul className='list'>

        {todos.map((e) => (
          <li key={e.id} className='list-item'>
            <p>{e.text}</p>
            <button onClick={() => dispatch(removeTodo(e.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;


// we get the todos from store 
// to get data from the store we use use Selector