import React, { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "./Data";

const List = ({ checked, startDate, setStartDate }) => {
  const [todos, setTodos] = useContext(DataContext);

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleEditTodos = (editValue, editDate, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editValue;
        todo.date = editDate;
      }
    });
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const removeItem = [...todos].filter((todo) => todo !== id);
    setTodos(removeItem);
  };

  return !checked ? (
    <div className="todo-list-container">
      {todos.map((todo, index) => (
        <ListItem
          todo={todo}
          key={index}
          id={index}
          completeTodo={completeTodo}
          handleEditTodos={handleEditTodos}
          handleDelete={handleDelete}
          startDate={startDate}
          setStartDate={setStartDate}
        />
      ))}
    </div>
  ) : (
    <div className="todo-list-container">
      {todos
        .filter((todo) => !todo.complete)
        .map((todo, index) => (
          <ListItem
            todo={todo}
            key={index}
            id={index}
            completeTodo={completeTodo}
            handleEditTodos={handleEditTodos}
            handleDelete={handleDelete}
            startDate={startDate}
            setStartDate={setStartDate}
          />
        ))}
    </div>
  );
};

export default List;
