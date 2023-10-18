import { useReducer } from "react";
import Card from "./components/Card";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [tasks, dispatch] = useReducer(todoReducer, []);

  function todoReducer(tasks, action) {
    switch (action.type) {
      case "TODO_ADD": {
        return [
          ...tasks,
          {
            id: uuidv4(),
            text: "",
            dateTime: new Date(),
            inState: "todo",
          },
        ];
      }
      case "TODO_EDITED": {
        const editedTask = [...tasks];
        const idx = editedTask.findIndex((nt) => nt.id === action.value.id);
        if (idx !== -1) {
          editedTask[idx]["text"] = action.value.value;
        }
        return editedTask;
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
  function handleEdited(value, id) {
    dispatch({
      type: "TODO_EDITED",
      value: { value, id },
    });
  }

  return (
    <div className="total-div">
      <div className="container">
        <h2>My todo</h2>
        <Card
          addTodo={(text) => handleAdd(text)}
          tasks={tasks}
          edited={handleEdited}
        />
      </div>
      <div className="progess">
        <h2>progress</h2>
      </div>
      <div className="done">
        <h2>Done</h2>
      </div>
    </div>
  );
}

export default App;
