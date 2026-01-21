import React from 'react-dom'
import { RiEditFill } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";


const Todo = ({task, deleteTodo, editTodo}) => {
  console.log(task);
  return (
    <div className='flex justify-between items-center bg-slate-500 text-gray-300 py-3 px=4 rounded-md my-1'>
        <p>{task.task}</p>
        <div className="flex items-center gap-x-1">
            <RiEditFill className="text-x1" onClick={() => editTodo(task.id)}/>
            <IoMdTrash className="text-x1" onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo