import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "./Data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";

const Form = () => {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();
  const [startDate, setStartDate] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    if (!todoName || /^\s*$/.test(todoName)) {
      return alert("Please enter todo again..");
    } else if (startDate === null) {
      return alert("Please enter your deadline day..");
    } else {
      setTodos([
        ...todos,
        {
          name: todoName,
          complete: false,
          date: startDate,
        },
      ]);
      setTodoName("");
      todoInput.current.focus();
    }
  };

  const { t, i18n } = useTranslation();

  return (
    <form className="form" onSubmit={addTodo}>
      <div className="form-input">
        <input
          maxLength="50"
          type="text"
          name="todos"
          id="todos"
          required
          placeholder={t("Enter task ...")}
          value={todoName}
          onChange={(e) => setTodoName(e.target.value.toLowerCase())}
          ref={todoInput}
        />
        <DatePicker
          readonly="readonly"
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText={t("Choose your deadline")}
        />
      </div>
      <button>{t("Submit")}</button>
    </form>
  );
};

export default Form;
