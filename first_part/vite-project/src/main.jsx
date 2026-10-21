import ReactDOM from 'react-dom/client'
// import App from './App'
import App from './App.jsx'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol..',
    important: true,
  },
]
const setNotes = [
   {
    id: 7,
    content: '77777777777777777',
    important: false,
  },
  {
    id: 8,
    content: '888888888888888888888888',
    important: true,
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)
// ReactDOM.createRoot(document.getElementById('root2')).render(
//   <App setNotes={setNotes} />
// )