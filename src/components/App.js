import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {

  function handleCategoryChange(event) {
    onCategoryChange(event.target.value);
  }

  function handleDarkModeClick() {
    onDarkModeClick((isDarkMode) => !isDarkMode);
}


  const [items, setItems] = useState(itemData);
  const [isDarkMode, onDarkModeClick] = useState(false);
  const [selectedCategory, onCategoryChange] = useState("All");
 

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
   
      <ShoppingList items={items} selectedCategory={selectedCategory} 
                    onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;