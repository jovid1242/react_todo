import React, { useState } from "react";
import List from "../components/list";
import AddTodo from "../components/addTodo";
import "../styles/home.css";

export default function Home() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "jovid",
      isComplete: true,
    },
  ]);

  const filterTodo = (el) => {
    const reslt = todo.find((item) => item.text === el.text);
    if (reslt) {
      return false;
    } else return true;
  };

  const addNewTodo = (el) => {
    if (el.text !== "") {
      if (filterTodo(el)) {
        setTodo((prev) => [el, ...prev]);
      }
    } else return;
  };

  const deleteTodo = (el) => {
    const result = todo.filter((item) => item.id !== el.id);
    setTodo(result);
  };

  const editTodo = (id, el) => {
    let updatedTodo = todo.map((item) => {
      if (item.id === id) {
        item.text = el.text;
      }
      return item;
    });
    setTodo(updatedTodo);
  };

  const checkedTodo = (el, check) => {
    let chekTodo = todo.map((item) => {
      if (item.id === el.id) {
        item.isComplete = check;
      }
      return item;
    });
    setTodo(chekTodo);
  };

  return (
    <div className="todo_list">
      <div className="container">
        <h2>TODO-LIST</h2>
        <AddTodo addNewTodo={addNewTodo} />
        <List
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          checkedTodo={checkedTodo}
        />
      </div>
    </div>
  );
}
