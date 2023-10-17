import { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoAddForm from "./components/TodoAddForm";
import Card from "./components/Card";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  function todoReducer(todos, action) {
    switch (action.type) {
      case "TODO_ADD": {
        return [
          ...todos,
          {
            id: new Date().getTime(),
            text: action.value,
            isDone: false,
          },
        ];
      }
      case "TODO_DELETE": {
        const filtered = todos.filter((t) => t.id != action.value);
        return [...filtered];
      }
      case "TODO_DONE": {
        const newTodos = [...todos];
        const idx = newTodos.findIndex((nt) => nt.id === action.value);
        if (idx !== -1) {
          newTodos[idx]["isDone"] = true;
        }
        return newTodos;
      }
      case "TODO_UNDONE": {
        const newTodos = [...todos];
        const idx = newTodos.findIndex((nt) => nt.id === action.value);
        if (idx !== -1) {
          newTodos[idx]["isDone"] = false;
        }
        return newTodos;
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }

  function handleAdd(value) {
    dispatch({
      type: "TODO_ADD",
      value: value,
    });
  }
  function handleDelete(id) {
    dispatch({
      type: "TODO_DELETE",
      value: id,
    });
  }
  function handleDone(id, type) {
    if (type == "done") {
      dispatch({
        type: "TODO_DONE",
        value: id,
      });
    } else {
      dispatch({
        type: "TODO_UNDONE",
        value: id,
      });
    }
  }

  return (
    <div className="total-cointainer">
      <div className="child">
        <h1>Drello-app</h1>
        <TodoAddForm handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
        <Card />
      </div>
      <div className="child">PROGRESS</div>
      <div className="child">DONE</div>
    </div>
  );
}

export default App;

// return (
//   <div>
//     <h1>Drello</h1>
//     <div className="parent">
//       <div className="child">TODO

//       </div>
//       <div className="child">IN-PROGESS</div>
//       <div className="child">DONE</div>
//     </div>
//   </div>
// );
