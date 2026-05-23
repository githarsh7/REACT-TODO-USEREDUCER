import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import useTodo from "./hooks/useTodo";

function App() {
  const {
    todos,
    addTodo,
    deleteTodo,
    updateStatus,
  } = useTodo();

  return (
    <div className="app">
      <div className="todo-container">
        <Header />

        <Main
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
}

export default App;