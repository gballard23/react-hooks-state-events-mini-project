import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
const [name, setName] = useState("");
const [category, setCategory] = useState('Code');
  const categoryList = categories.map((cat) => (
    <option 
      key={cat} 
      value={cat} 
    >{cat}</option>
  ))

  function onCategoryChange(e) {
    setCategory(e.target.value)
  } 
  console.log(category)

  function handleName(e){
    setName(e.target.value)
  }
  console.log(name)

  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({
      name,
      category
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={name} onChange={handleName}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={onCategoryChange}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
