import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {

    return (
          <div className="to-do-container">
            <h1 className="title">Leo's To-do List</h1>
            <div className="to-do letter">
                {/* Notes To-do */}
                <TodoList />
            </div>
            <div className="footer">
                <p>Made with a lot of pain ...</p>
             <p>Leo Rodriguez</p>
            </div>
            </div>
    );
};

export default App;