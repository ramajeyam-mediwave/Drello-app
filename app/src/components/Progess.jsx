import React, { useState } from "react";
import { formatDate } from "../utils";
function Inprogess({ edited, tasks, deleteCard }) {
  const [text, setText] = useState("");

  function handleBlockquoteChange(newValue) {
    setText(newValue);
  }

  return (
    <>
      <div>
        {tasks
          .filter((t) => t.inState === "progress")
          .map((todo, id) => (
            <div key={todo.id} draggable className="total-card">
              <div className="button-div">
                <button onClick={() => deleteCard(todo.id)} className="button">
                  ❌
                </button>
              </div>
              <textarea
                className="textarea"
                onChange={(e) => handleBlockquoteChange(e.target.value)}
                onBlur={(e) => edited(e.target.value, todo.id)}
                placeholder="enter"
              >
                {todo.text}
              </textarea>
              <div className="time">{formatDate(todo.dateTime)}</div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Inprogess;
