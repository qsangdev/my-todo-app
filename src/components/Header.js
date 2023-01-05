import React, { useContext, useState } from "react";
import { DataContext } from "./Data";

import { useTranslation } from "react-i18next";

const Header = ({ checked, setChecked }) => {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
    
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      {todos.length === 0 ? (
        <h2>{t("Nothings to do")} 🤡</h2>
      ) : (
        <div className="header">
          <label>
            <input
              type="checkbox"
              name="all"
              id="all"
              onClick={handleCheckAll}
            />{" "}
            {t("All")}
          </label>
          <label>
            <input
              type="checkbox"
              defaultChecked={checked}
              onClick={() => setChecked(!checked)}
            />{" "}
            {t("Not Finished Only")}
          </label>
          {t("You have")}{" "}
          {todos.filter((todo) => todo.complete === false).length}{" "}
          {t("tasks left")}!
        </div>
      )}
    </>
  );
};

export default Header;
