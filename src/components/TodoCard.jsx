function TodoCard({
  todo,
  deleteTodo,
  updateStatus,
}) {

  /* STATUS COLOR */

  const getStatusClass = () => {

    if (todo.status === "Completed") {
      return "completed";
    }

    if (todo.status === "Not Completed") {
      return "not-completed";
    }

    return "pending";
  };

  return (
    <div className="todo-card">

      <div className="todo-text">

        <h3>{todo.text}</h3>

        <p className={`todo-status ${getStatusClass()}`}>
          {todo.status}
        </p>

      </div>

      <div className="todo-actions">

        {/* UPDATE */}

        <button
          className="update-btn"
          onClick={() =>
            updateStatus(todo.id)
          }
        >
          Update
        </button>

        {/* DELETE */}

        <button
          className="delete-btn"
          onClick={() =>
            deleteTodo(todo.id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TodoCard;