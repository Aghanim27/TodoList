import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/App.css";
import TodayDate from "./component/TodayDate";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...todos,
        { id: crypto.randomUUID(), title: newTask, completed: false },
      ];
    });

    setNewTask("");
  };

  const toggleTodoCheck = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    return setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="mainContainer">
      <TodayDate />
      <h1 className="text-white fw-bold fs-1 text-center pt-2 todoList">
        Todo List
      </h1>
      <div className="inputContainer">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="task"
              placeholder="Add Tasks"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            ></input>
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
      <div className="todoItemsContainer">
        <ul>
          <div className="text-white fw-bold fs-4 text-center mt-5">
            {todos.length === 0 && "No Todos"}
          </div>
          <div>
            {todos.map((todo) => {
              return (
                <li className="todoItems" key={todo.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(e) =>
                        toggleTodoCheck(todo.id, e.target.checked)
                      }
                    />
                    <span className="mx-3 taskName">{todo.title}</span>
                  </label>
                  <button
                    className="deleteBtn"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
