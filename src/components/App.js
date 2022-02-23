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
  const [selected, setSelected] = useState(false);
  
  function onTaskFormSubmit(newItem) {
    setTasks([...tasks, newItem]);
  }

  
  const itemsToDisplay = tasks.filter((item) => {
    if(category === 'All')return true;
    return item.category === category
   } 
   )
   
   function handleCategoryChange(event){
     setSelected(event.target.value)
     setCategory(event.target.value)
   }
   
   const categoriesForForm = CATEGORIES.filter(x => x !=='All')

   

function handleDelete(text){
  setTasks(tasks.filter(task => {
   return task.text !== text}))
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} selected={selected}/>
      <NewTaskForm categories={categoriesForForm} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={itemsToDisplay} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
