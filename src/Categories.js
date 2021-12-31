import React from "react";

export default function Categories({ filterItems, categories }) {
  return (
    <div className="btn-container">
      {categories &&
        categories.map((category, index) => (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
    </div>
  );
}
