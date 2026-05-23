import { useState } from "react";

import TodoCard from "./TodoCard";

function Main({
  todos,
  addTodo,
  deleteTodo,
  updateStatus,
}) {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() === "") return;

    addTodo(input);

    setInput("");
  };

  return (
    <main>
      <div className="todo-input-box">
        <input
          type="text"
          placeholder="Add Your Peaceful Task ~"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
        />

        <button
          className="add-btn"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="empty-text">
          --NO TODOS ADDED YET--
        </p>
      ) : (
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateStatus={updateStatus}
          />
        ))
      )}
    </main>
  );
}

export default Main;