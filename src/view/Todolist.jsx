import React, { useState } from 'react'
import "../style/todolist.css"

const Todolist = () => {

    const [tasks , setTasks ] = useState([]);

    let ShowTask = (event)=>{
         event.preventDefault();

         let taskName = event.target.elements.task.value.trim();

          setTasks([...tasks ,taskName]);



         console.log(tasks)

         event.target.reset()



    }

  return (
    <div className='todoListPage'>
        <h2>ToDO List</h2>

        <form onSubmit={ShowTask}>
            <input type="text" placeholder='TASK...' name='task' />
            <button type='submit'>Submit</button>
        </form>


    </div>
  )
}

export default Todolist