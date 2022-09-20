import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Masonry } from "@mui/lab";
import NoteCard from "../components/NoteCard";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .then(console.error);
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <Container>
      <Masonry spacing={3} columns={{ xs: 1, md: 2, lg: 3}}>
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
