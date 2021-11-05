import React, { useState } from "react";
import "../../styles/addTodo.css";

export default function Index({ addNewTodo }) {
  const [todo, setTodo] = useState({
    id: null,
    text: null,
    isComplete: false,
  });

  const handeleInput = (e) => {
    setTodo({ id: new Date(), text: e.target.value, isComplete: false });
  };

  const sendTodo = (e) => {
    e.preventDefault();
    addNewTodo(todo);
  };

  return (
    <>
      <div className="add_new_todo">
        <form action="" onSubmit={sendTodo}>
          <input
            type="text"
            onChange={(e) => handeleInput(e)}
            placeholder="Напишите что ни будь"
          />
          <button className="btn_add_todo">Отправить</button>
        </form>
      </div>
    </>
  );
}
