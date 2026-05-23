import { useReducer } from "react";

import {
  todoReducer,
  initialState,
} from "../reducers/Reducer";

function useTodo() {
  const [state, dispatch] = useReducer(
    todoReducer,
    initialState
  );

  const addTodo = (text) => {
    dispatch({
      type: "ADD_TODO",
      payload: text,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const updateStatus = (id) => {
    dispatch({
      type: "UPDATE_STATUS",
      payload: id,
    });
  };

  return {
    todos: state.todos,
    addTodo,
    deleteTodo,
    updateStatus,
  };
}

export default useTodo;