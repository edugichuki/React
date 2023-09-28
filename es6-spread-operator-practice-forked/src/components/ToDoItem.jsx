import React from "react";

const ToDoItem = (props) => {
  return <li style={{ textDecoration: "line-through" }}>{props.text}</li>;
};

export default ToDoItem;
