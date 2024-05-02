import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import initialNotes from "../notes";
import NoteAddForm from "./NoteAddForm";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  useEffect(() => {
    axios.get("http://localhost:3001/api/notes")
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  function addNote(newNote) {
    axios.post("http://localhost:3001/api/notes", newNote)
    .then(response => {
      setNotes((prevNotes) => [...prevNotes, response.data]);
    })
    .catch(error => console.error('Error:', error));
  }
  
  function deleteNote(id) {
    console.log("Deleting note with ID:", id);
    axios.delete(`http://localhost:3001/api/notes/${id}`).then(() => {
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    })
    .catch(error => console.error('Error:', error));
  }
  

  function createNotes(notes) {
    return notes.map((note) => (
      <Note
        key={note._id}
        id={note._id}
        title={note.title}
        content={note.content}
        onDelete={deleteNote}
      />
    ));
  }
  return (
    <div className="App">
      <Header />
      <NoteAddForm onAdd={addNote} />
      {createNotes(notes)}
      <Footer />
    </div>
  );
}
export default App;
