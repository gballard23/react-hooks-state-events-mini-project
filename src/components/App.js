import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  const [selected, isSelected] = useState(false);

  function handleAddTask(newTasks) {
    setTasks([...tasks, newTasks]);
  }

 function handleCategoryChange(event){
   setCategory(event.target.value)
   isSelected(event.target.value)

 }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        CATEGORIES={CATEGORIES}
        onCategoryChange={handleCategoryChange}
        selected={selected}
       />
      <NewTaskForm
        categories={CATEGORIES.filter((cat) => cat !== "All")}
        onTaskFormSubmit={handleAddTask}
       />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
