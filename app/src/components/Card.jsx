import React, { useState } from "react";

function Card({ addTodo, edited, tasks }) {
  const [text, setText] = useState("");

  const addCard = () => {
    addTodo(text);
  };
  function handleBlockquoteChange(newValue) {
    setText(newValue);
  }

  return (
    <>
      <button onClick={addCard}>+</button>
      <div className="">
        {tasks.map((todo, id) => (
          <div key={id}>
            <textarea
              key={id}
              onChange={(e) => handleBlockquoteChange(e.target.value)}
              onBlur={(e) => edited(e.target.value, todo.id)}
              placeholder="enter"
            />
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
}

export default Card;
