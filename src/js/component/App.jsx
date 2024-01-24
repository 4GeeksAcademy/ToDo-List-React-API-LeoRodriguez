import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  const toTalItemsLeft = items.length;

  function addItem(inputText) {
	if(inputText === ""){
		return alert("Missing Required Field");
	} else{ setItems(prevItems => {
		return [...prevItems, inputText];
	  });}
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
	<div>
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
		<p className="bottom-p">{toTalItemsLeft} Tasks Left</p>
      </div>
	  
    </div>
	<footer>
	<p class="text-center">© 2024 Leo Rodriguez</p>
	</footer>
	</div>
	
  );
}

export default App;