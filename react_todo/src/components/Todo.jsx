import React from 'react-dom'
import { RiEditFill } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { FaCheck, FaRegCircle } from "react-icons/fa";



const Todo = ({task, deleteTodo, editTodo , toggleComplete}) => {
  //console.log(task);
  const isComplete = false;
  return (
    <div className={`flex justify-between items-center bg-slate-500 text-gray-300 py-3 px=4 rounded-md my-1 ${task.isComplete ? 'bg-slate-700 text-gray-500' : 'text-gray-300'}`}>
        <div className='flex items-center gap-1'>
          <button className='pl-2' onClick={() => toggleComplete(task.id)}>
            {
              task.isComplete ? <FaCheck className='text-green-400'/> : <FaRegCircle className='text-gray-400'/> 
            }
          </button>
        
          <p className={task.isComplete ? "line-through" : ''}>{task.task}</p>
        </div>
        <div className="flex items-center gap-x-1 mr-2">
            <RiEditFill className="text-x1" onClick={() => editTodo(task.id)}/>
            <IoMdTrash className="text-x1" onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo