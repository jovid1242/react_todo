import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

export default function Index(props) {
  const [todo, setTodo] = useState({
    text: null,
  });

  useEffect(() => {
    setTodo({ text: props.item.text });
  }, [props]);

  const sendTodo = (e) => {
    e.preventDefault();
    props.editTodo(props.item.id, todo);
    props.onHide();
  };
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Изменение
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="add_new_todo">
            <form onSubmit={sendTodo}>
              <input
                type="text"
                value={todo.text}
                onChange={(e) => setTodo({ text: e.target.value })}
                placeholder="Напишите что ни будь"
              />
              <button className="btn_add_todo">Отправить</button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
