import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {


  return (
    <div className="tasks">
      {tasks.map((tsk) => (
        <Task key={tsk.text} text={tsk.text} category={tsk.category} handleDelete={handleDelete}/>
        ))}
      
    </div>
  );
}

export default TaskList;
