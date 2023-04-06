import{ useState } from "react";
export default function NewNotePage() {
  const [note, setNote] = useState('');

  function handleChange(evt) {
    setNote(evt.target.value)
  }
  
  function handleSubmit(evt){
    evt.preventDefault();
    alert(note);
    setNote('');
  }

  return (
    <>
      <h1>New Note</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="text">Text:
          <input type="text" name="text" id="text" onChange={handleChange} value={note}/>
        </label>
        <input type="submit" value="Add Note" />
      </form>
    </>
  );
}