

import { useState } from 'react'
import Note from './components/Note'
const App = ({ notes: initialNotes }) => {
  const [notes, setNotes] = useState(initialNotes)
   const addNote = (event) => {
    // event.preventDefault()
    // console.log('button clicked..', event.target)


    event.preventDefault()
  const noteObject = {
    content: newNote,
    important: Math.random() < 0.5,
    id: String(notes.length + 1),
  }

  setNotes(notes.concat(noteObject))
  setNewNote('')

  }
  const [newNote, setNewNote] = useState(
    'a new note...'
  ) 

   const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
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
        
  <p>
    {/* <input type="text" id="name" name="user_name" /> */}
    <input value={newNote} onChange={handleNoteChange}/>
  </p>
 
  


  
  <button type="submit">Send your message</button>

</form>

    </div>
  )

}

export default App