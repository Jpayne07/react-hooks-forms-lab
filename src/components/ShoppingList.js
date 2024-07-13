import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dynamicCat, setDynamicCat] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleDynamicChange(event) {
    setDynamicCat(event.target.value);
  }

  
  

  const itemsToDisplay = items.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const dynamicMatch = item.name.toLowerCase().includes(dynamicCat.toLowerCase());
    return categoryMatch && dynamicMatch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit = {onItemFormSubmit}/>
      <Filter search={dynamicCat}
              onCategoryChange={handleCategoryChange} 
              onSearchChange = {handleDynamicChange} 
               />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
