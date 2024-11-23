import React, { useState, useEffect } from "react";
import axios from "axios";

import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editNote, setEditNote] = useState(null);

  const API_URL = "https://personal-notes-backend-s7wn.onrender.com/notes";

  const fetchNotes = async () => {
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data.notes);
      console.log(response)
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  const addNote = async (note) => {
    try {
      if (editNote) {
        const response = await axios.put(`${API_URL}/${editNote._id}`, note);
        setNotes(
          notes.map((n) => (n._id === editNote._id ? response.data.note : n))
        );
        setEditNote(null);
      } else {
        const response = await axios.post(API_URL, note);
        setNotes([...notes, response.data.note]);
      }
    } catch (error) {
      console.error("Error adding/updating note:", error.message);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Personal Notes Manager</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteForm addNote={addNote} editNote={editNote} />
      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        setEditNote={setEditNote}
      />
    </div>
  );
};

export default App;
