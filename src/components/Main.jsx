import Note from './Note';

import './Main.css';

export default function Main() {

  const notes = [
    {
      key: 2,
      text: 'This is a note',
    },
    {
      key: 4,
      text: 'Another note',
      color: 'red',
      fixed: true
    },
    {
      key: 5,
      text: 'And yet another note here',
      color: 'lime'
    },
  ]

  return (
    <div className="Main">
      {notes.map(note => (
        <Note key={note.key} color={note.color} fixed={note.fixed}>
          {note.text}
        </Note>
      ))}
    </div>
  );
}
