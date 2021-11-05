import React, { useState } from "react";
import Modal from "../modal/index";
import editIcon from "../../assets/icon/2561427_edit_icon.svg";
import deleteIcon from "../../assets/icon/326606_delete_icon.svg";

import "../../styles/list.css";

export default function TodoList({ todo, deleteTodo, checkedTodo, editTodo }) {
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState([]);
  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        editTodo={editTodo}
        item={item}
      />
      <div className="list_todo">
        <ul>
          {todo?.map((el, index) => {
            return (
              <li key={index}>
                <p className={el.isComplete === true ? "strike" : ""}>
                  {el?.text}
                </p>
                <div className="actions_todo">
                  <div className="btn_delete">
                    <img
                      src={deleteIcon}
                      alt="delete icon"
                      onClick={() => deleteTodo(el)}
                    />
                  </div>
                  <div className="btn_edit">
                    <img
                      src={editIcon}
                      alt="editIcon"
                      onClick={() => {
                        setModalShow(true);
                        setItem(el);
                      }}
                    />
                  </div>
                  <input
                    type="checkbox"
                    name="option"
                    onChange={(e) => checkedTodo(el, e.target.checked)}
                    checked={el.isComplete}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
