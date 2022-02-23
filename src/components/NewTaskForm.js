import React, { useState }from "react";


function NewTaskForm({categories, onTaskFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Code");

  const categoryOption = categories.map(x => (
    <option key={x} value={x}>{x}</option>
  ))

  function handleNameSubmit(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }


  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({
      text:name,
      category:category, 
      })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={name} onChange={handleNameSubmit} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {categoryOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
