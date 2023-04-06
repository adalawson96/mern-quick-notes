import { checkToken } from "../../utilities/users-service";

export default function NotesPage() {

  async function handleCheckToken() {
    const expDate = await checkToken()
    console.log(expDate)
  }

  return (
    <>
      <h1>NotesPage</h1>
      <button onClick={ handleCheckToken }>Check when my login expires</button>

      <h3>No Notes Yet!</h3>
    </>
  );
}