import React from "react";

function ToDoItem(props) {
  return (
    <div
    >
      <li>{props.label} 
        <button className="deleteItemBtn" onClick={() => {props.onChecked(props.id);}}>
            <i className="fa-solid fa-trash"></i>
        </button>
      
      </li>
    </div>
  );
}

export default ToDoItem;
