import { set } from "mongoose";
import { useState } from "react";
import * as notesService from '../../utilities/notes-service';

export default function NewNotePage() {
  const [note, setNote] = useState('');

  function handleChange(evt) {
    setNote(evt.target.value)
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    notesService.createNote(note);
    setNote('');
  }

  return (
    <>
      <h1>New Note</h1>
      <form action="" onSubmit={handleSubmit} >
        <label htmlFor="text">Text:
          <input type="text" name="text" id="text" onChange={handleChange} value={note}/>
        </label>
        <input type="submit" value="Add Note" />
      </form>
    </>
  );
}