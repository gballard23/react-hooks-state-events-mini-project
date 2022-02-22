import Task from "./Task";
import React, { useState } from "react";

function TaskList({tasks}) {
  const [task, setTask] = useState(tasks);
  



 function handleClick(text){
    setTask(task.filter((tsk) => 
      tsk.text !== text
      )
    )
  }



 return (
    <div className="tasks">
      <Task key={task.text} task={task} handleClick={handleClick} />
    </div>
  );
}

export default TaskList;
