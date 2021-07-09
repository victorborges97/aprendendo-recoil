import React, { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { IoIosAddCircle } from 'react-icons/io';

import { todosListSize } from '../Atom/todos';
import { useTodo } from '../hooks/TodoHooks';

import "./Todo.css"

const Todo = () => {

  const { todoList, addTodo, deleteTodo } = useTodo();

  const inputTodoRef = useRef();

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onAddTodo(event);
    }
  }
  
  const onAddTodo = (event) => {
    event.preventDefault();
    addTodo(inputTodoRef.current.value)
    inputTodoRef.current.value = ""
  }

  const countTodo = useRecoilValue(todosListSize);

  return (
    <div className="AddTodo">
      <h2>{countTodo === 0 ? "Sem" : countTodo} Todo</h2>

      <div>
        <input onKeyDown={onKeyDown} type="text" ref={inputTodoRef} />
        <button className="add-btn" onClick={onAddTodo} >
          <IoIosAddCircle color="#FFF" size={14} />
        </button>
      </div>
      
        <ul>
          {
            todoList.map((i) => (
              <li key={i.key}>
                <div>
                  {i.todo} 
                </div>
                <button onClick={_ => deleteTodo(i.key)}>
                  <RiDeleteBin2Fill color="#FFF" size={14} />
                </button>
              </li>
            ))
          }
        </ul>


    </div>
  )
}

export default Todo;