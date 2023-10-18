import React, { useState } from "react";

function Card({ addTodo, edited, tasks }) {
  const [text, setText] = useState("");

  const addCard = () => {
    addTodo(text);
  };
  function handleBlockquoteChange(newValue) {
    setText(newValue);
    console.log(newValue);
  }

  return (
    <>
      <button onClick={addCard}>+</button>
      <div className="card">
        {tasks.map((todo, index) => (
          <div key={todo.id}>
            <textarea
              key={todo.id}
              // value={text}
              onChange={(e) => handleBlockquoteChange(e.target.value)}
              onBlur={(e) => edited(e.target.value, todo.id)}
              placeholder="text here"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
