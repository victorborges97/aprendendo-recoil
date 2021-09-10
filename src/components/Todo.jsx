import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { RiDeleteBin2Fill } from 'react-icons/ri';

import { IconButton, makeStyles, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { todosListSize } from '../Atom/todos';
import { useTodo } from '../hooks/TodoHooks';

import "./Todo.css"

const Todo = () => {

  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState({});
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

    if (inputTodoRef.current.value === "" && inputTodoRef.current.value === " ") {
      return
    }
    if (edit) {

    } else {
      addTodo(inputTodoRef.current.value)
      inputTodoRef.current.value = ""
    }
    setEdit(false);
  }

  const editItemFC = (item) => {
    setEditItem({ index: item.index, item: item.item });
    setEdit(true);
  }

  const countTodo = useRecoilValue(todosListSize);

  const useStyles = makeStyles((theme) => ({
    input: {
      color: "#FFF",

      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
        color: 'white',
      },
      '& .MuiInputBase-root': {
        color: 'white',
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="AddTodo">
      <h2>{countTodo === 0 ? "Sem" : countTodo} Todo</h2>

      <div className="AddTodo-input">
        <TextField
          inputRef={inputTodoRef}
          onKeyDown={onKeyDown}
          id="outlined-textarea"
          className={classes.input}
          placeholder="Seu todo aqui ...."
          multiline
          variant="outlined"
          style={{
            minWidth: "70%",
            color: "#FFF",
          }}
        />
        <IconButton
          onClick={onAddTodo}
          style={{ backgroundColor: "#0080ff", color: "#FFF" }}
          aria-label="add"
          fontSize="small"
        >
          <AddIcon fontSize="small" color="#FFF" />
        </IconButton>
      </div>

      <ul>
        {
          todoList.map((i) => (
            <li key={i.key}>
              <div className="todo-text">
                {i.todo}
              </div>
              <div style={{ display: "flex" }}>
                {
                  false && (
                    <IconButton
                      onClick={_ => { }}
                      style={{ backgroundColor: "#d22b2b", color: "#FFF", marginRight: 5 }}
                      aria-label="add"
                      fontSize="small"
                    >
                      <EditIcon fontSize="small" color="#FFF" />
                    </IconButton>
                  )
                }

                <IconButton
                  onClick={_ => deleteTodo(i.key)}
                  style={{ backgroundColor: "#d22b2b", color: "#FFF" }}
                  aria-label="add"
                  fontSize="small"
                >
                  <DeleteIcon fontSize="small" color="#FFF" />
                </IconButton>
              </div>
            </li>
          ))
        }
      </ul>


    </div >
  )
}

export default Todo;