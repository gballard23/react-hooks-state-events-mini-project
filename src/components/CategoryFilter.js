import React from "react";

function CategoryFilter({categories, onCategoryChange, selected}) {
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((c) => (
        <button 
          key={c}
          value={c}
          className={c === selected ? 'selected' : null}
          onClick={onCategoryChange}>{c}</button>
      ))
      }
    </div>
  );
}

export default CategoryFilter;
