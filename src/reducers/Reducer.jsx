export const initialState = {
  todos: [],
};

export function todoReducer(state, action) {
  switch (action.type) {

    /* ===== ADD TODO ===== */

    case "ADD_TODO":
      return {
        ...state,

        todos: [
          ...state.todos,

          {
            id: Date.now(),

            text: action.payload,

            status: "Pending",
          },
        ],
      };

    /* ===== DELETE TODO ===== */

    case "DELETE_TODO":
      return {
        ...state,

        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        ),
      };

    /* ===== UPDATE STATUS ===== */

    case "UPDATE_STATUS":
      return {
        ...state,

        todos: state.todos.map((todo) => {

          if (todo.id === action.payload) {

            /* STATUS FLOW */

            let newStatus = "";

            if (todo.status === "Pending") {
              newStatus = "Completed";
            }

            else if (todo.status === "Completed") {
              newStatus = "Not Completed";
            }

            else {
              newStatus = "Pending";
            }

            return {
              ...todo,

              status: newStatus,
            };
          }

          return todo;
        }),
      };

    default:
      return state;
  }
}