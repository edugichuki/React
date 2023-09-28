import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="item"
          value={inputText}
          onChange={handleChange}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            <ToDoItem text={todoItem} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
