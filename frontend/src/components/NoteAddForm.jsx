import React, { useState } from "react";

function NoteAddForm(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd({ title: noteTitle, content: noteContent });
    setNoteTitle("");
    setNoteContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Take a note..."
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NoteAddForm;
