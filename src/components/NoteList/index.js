import React from "react";

import "./index.css"

const NoteList = ({ notes, deleteNote, setEditNote }) => {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map((note) => (
          <div key={note._id} className="note">
            <h1 className="list-heading">{note.title}:</h1>
            <p className="list-para">{note.description}</p>
            <p className="cate-container"><span className="list-cateory">Category:</span> {note.category}</p>
            <div>
              <button onClick={() => setEditNote(note)}>Edit</button>
              <button onClick={() => deleteNote(note._id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;
