import React, { useState } from 'react'
import Form from './Form.jsx'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo.jsx';
import Edit from './Edit.jsx';

uuidv4();

const TodoList = () => {
  const [ todoValue, setTodoValue ] = useState([]);

  const createTodo = (todo) => {
    setTodoValue([...todoValue, {id: uuidv4(), task: todo, isEdit: false}]) 
    console.log(todoValue);
  }

  const deleteTodo = (id) => {
    // 배열에서 id가 같지 않은것만 필터
    setTodoValue(todoValue.filter((todo) => todo.id !== id ));
    console.log('할일삭제')
  }

  const editTodo = (id) => {
    setTodoValue(
      todoValue.map((todo) => todo.id === id ? {...todo, isEdit: todo.isEdit} : todo )
    )
  }
  
  const editTask = (task, id) => {
    setTodoValue.map((todo) => todo.id === id ? {...todo, task: task, isEdit: false} : todo)
  }

  return (
    <div className='container'>
      <Form createTodo={ createTodo } />

      {
        todoValue.map((todo, idx) => 
          todo.isEdit ? (
              <Edit key={idx} task={todo} editTask={editTask}/>
          ) : (
              <Todo key={idx} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
        )
      }
    </div>
  )
}

export default TodoList