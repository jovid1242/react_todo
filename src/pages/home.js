import React, { useState } from "react";
import List from "../components/TodoList";
import AddTodo from "../components/AddTodo";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      toast("Такая задачка уже существует");
      return false;
    } else return true;
  };

  const addNewTodo = (el) => {
    if (el.text !== "") {
      if (filterTodo(el)) {
        toast("Задача была успешно добавлена");
        setTodo((prev) => [el, ...prev]);
      }
    } else return;
  };

  const deleteTodo = (el) => {
    const result = todo.filter((item) => item.id !== el.id);
    toast("Задача была успешно удалена");
    setTodo(result);
  };

  const editTodo = (id, el) => {
    let updatedTodo = todo.map((item) => {
      if (item.id === id) {
        toast("Задача успешно изменена");
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
    <>
      <ToastContainer />
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
    </>
  );
}
