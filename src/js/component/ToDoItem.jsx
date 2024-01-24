import React from "react";

function ToDoItem(props) {
  return (
    <div
    >
      <li>{props.text} 
        <button className="deleteItemBtn" onClick={() => {props.onChecked(props.id);}}>
            <i class="fa-solid fa-trash"></i>
        </button>
      
      </li>
    </div>
  );
}

export default ToDoItem;
