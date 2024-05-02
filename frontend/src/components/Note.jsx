import React from "react";

function Note(params) {
  function handleClick() {
    params.onDelete(params.id);
  }
  return (
    <div className="note">
      <h1>{params.title}</h1>
      <p>{params.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
