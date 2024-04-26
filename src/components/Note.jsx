import './Note.css';

export default function Note(props) {
  const {color, fixed, children} = props

  window.draggedItem = null //!FIXME

  const onDragStart = ev=>{
    window.draggedItem = ev.target
  }

  const onDragOver = ev=>{
    ev.preventDefault()
  }

  const onDrop = ev=>{
    ev.preventDefault()
    let tmp = ev.target.innerText
    ev.target.innerText = window.draggedItem.innerText
    window.draggedItem.innerText = tmp
  }

  return (
    <div
        className={`Note ${color ?? ''} ${fixed ? 'fixed' : ''}`}
        {...(fixed ? {} : {draggable: true})}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
      {children}
    </div>
  );
}
