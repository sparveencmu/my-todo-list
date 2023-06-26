import React, { useState, useEffect } from "react";
import ToDoList from "../ToDoList/ToDoList";
import "./Input.css";
import { nanoid } from "nanoid";

const getLocalItems = () => {
  let items = localStorage.getItem("TASK");
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

const Input = () => {
  const [toDoList, setToDoList] = useState(getLocalItems());
  const [inputData, setInputData] = useState("");

  const onSubmitHandler = (event) => {
    // Each time the user presses “Enter” on their keyboard, the page refreshes, 
    // and the state is lost. We pass the event.preventDefault() method to prevent that.
    event.preventDefault();
    if (inputData.trim().length <= 0) return;
    setInputData("");
    // When the state updates, the entire state is overwritten. If we want to save the old 
    // values of the array and add the new values to the ToDoList array, we can use the JavaScript spread operator. 
    setToDoList((prevValue) => [
      ...prevValue,
      { toDo: inputData, id: nanoid() }
    ]);
  };

  const onChangeHandler = (event) => {
    setInputData(event.target.value);
  };

  const onDeleteHandler = (itemID) => {
    setToDoList((oldValues) =>
      oldValues.filter((item) => {
        return item.id !== itemID;
      })
    );
  };

  useEffect(() => {
    const stringifyToDoList = JSON.stringify(toDoList)
    localStorage.setItem("TASK", stringifyToDoList);
  }, [toDoList]);

  return (
    <React.Fragment>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={inputData}
          placeholder=" 📝 Add Task"
          className="appInput"
          onChange={onChangeHandler}
        />
      </form>

      <ToDoList
        item={toDoList}
        onDelete={onDeleteHandler}
      />
    </React.Fragment>
  );
};

export default Input;