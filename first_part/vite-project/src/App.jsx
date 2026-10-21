

import { useState } from 'react'
import Note from './components/Note'
const App = ({ notes: initialNotes }) => {
  const [notes, setNotes] = useState(initialNotes)
   const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked..', event.target)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

<form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
  <p>
    <input type="text" id="name" name="user_name" />
  </p>
 
  <p>
    <textarea id="msg" name="user_message"></textarea>
  </p>


  
  <button type="submit">Send your message</button>

</form>


      {/* <form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
      </form>  */}
    </div>
  )

}

export default App