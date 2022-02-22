import React from "react";

  function CategoryFilter({ CATEGORIES, onCategoryChange, selected}) {
    
  
    const btnFilter = CATEGORIES.map((cat) =>(       
      <button 
        key={cat}
        value={cat}
        className={cat === selected ? "selected" : null }
        onClick={onCategoryChange}
        >{cat}</button>
      ) 
    )

  return (
    <div className="categories" >
      <h5>Category filters</h5>
      {btnFilter}
    </div>
  );
}

export default CategoryFilter;
