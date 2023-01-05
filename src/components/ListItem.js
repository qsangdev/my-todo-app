import React, { useState, useRef, useEffect } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const ListItem = ({
  todo,
  id,
  completeTodo,
  handleEditTodos,
  handleDelete,
}) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);
  const [date, setDate] = useState("");
  const [editDate, setEditDate] = useState();
  const editRef = useRef();

  const handleEdit = () => {
    setOnEdit(!onEdit);
  };

  useEffect(() => {
    if (onEdit) {
      editRef.current.focus();
    }
  }, [onEdit]);

  const handleSave = (id) => {
    setOnEdit(false);
    if (!editValue || /^\s*$/.test(editValue)) {
      alert("Please enter todo again..");
      return;
    } else if (editValue && editDate) {
      handleEditTodos(editValue, editDate, id);
    } else {
      setEditValue(todo.name);
      setEditDate(todo.date);
    }
  };

  useEffect(() => {
    const update = Math.ceil(
      (Date.parse(todo.date) - new Date()) / (1000 * 60 * 60 * 24)
    );
    setDate(update);
  }, [todo.date]);

  const { t, i18n } = useTranslation();

  if (onEdit) {
    return (
      <div>
        <form onSubmit={handleSave}>
          <input
            type="text"
            id="editValue"
            value={editValue}
            name="editValue"
            onChange={(e) => setEditValue(e.target.value.toLowerCase())}
            ref={editRef}
          />
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={editDate}
            onChange={(date) => setEditDate(date)}
            placeholderText={moment(todo.date).format("DD/MM/YYYY")}
          />
          <button className="save-edit" onClick={() => handleSave(id)}>
            {t("Save")}
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div
        className={
          !todo.complete ? "todo-item-container " : "todo-item-container done"
        }
      >
        {!todo.complete ? (
          <FaRegCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => completeTodo(id)}
          />
        ) : (
          <FaRegCheckCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => completeTodo(id)}
          />
        )}

        <div className="item-title">{todo.name}</div>

        <span>
          {date <= 0 ? `${t("time-expired")}` : `${date} ${t("days left")}`}
        </span>

        <div className="icons" disabled={todo.complete}>
          <i
            className="uil uil-multiply delete-icon"
            onClick={() => handleDelete(todo)}
          ></i>
          <i className="uil uil-edit edit-icon" onClick={handleEdit}></i>
        </div>
      </div>
    );
  }
};

export default ListItem;
