import React, { useState , useEffect} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  const toTalItemsLeft = items.length;
  const APIUrl = 'https://playground.4geeks.com/apis/fake/todos/user/LeoRodriguez'


  useEffect(() => {
    fetch(APIUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res=>res.clone().json())
    .then(data => {
      // Here is where your code should start after the fetch finishes
      console.log(JSON.stringify(data)); // This will print on the console the exact object received from the server
  })
    
  }, []);

       






  function addItem(inputText) {
    if(inputText === ""){
      return alert("Missing Required Field");
    } else{ setItems(prevItems => {

      
      const newTask ={  label: inputText, done: false };

      setItems([...items, newTask]);
   // setInputText("");

    fetch(APIUrl, {
      method: "PUT",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          console.error("Failed to update the task on the server.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });






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