import React, { useState , useEffect} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  const toTalItemsLeft = items.length;


  useEffect(() => {
    fetch('https://playground.4geeks.com/apis/fake/todos/user/DillonClass', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Will be true if the response is successful
        console.log(resp.status); // The status code=200 or code=400 etc.
        console.log(resp.text()); // Will try to return the exact result as a string
        return resp.json(); // (returns promise) Will try to parse the result as JSON and return a promise that you can .then for results
      })
    .then(data => {
        // Here is where your code should start after the fetch finishes
        console.log(data); // This will print on the console the exact object received from the server
    
        setItems(data);
        console.log(data);
      })
    .catch(error => {
        // Error handling
        console.log(error);
    });
  }, []);

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
              label={todoItem}
              onChecked={deleteItem}
            />
    ))}  
        </ul>
		<p className="bottom-p">{toTalItemsLeft} Tasks Left</p>
      </div>
	  
    </div>
	<footer>
	<p className="text-center">© 2024 Leo Rodriguez</p>
	</footer>
	</div>
	
  );
}

export default App;