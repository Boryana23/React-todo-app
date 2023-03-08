import './todo-item.css'

export function TodoItem({ title, checkItem, removeItem, moveItem, changeTodoTitle }) {

  const changeTitle = (event) => {
    changeTodoTitle(event.target.textContent)
  }


  return (
    <div className="todo__item">
      <input type="checkbox" checked={checkItem} onChange={moveItem} />
      <p className="taskTitle" onBlur={changeTitle} contentEditable>{title}</p>
      <button className="remove__button" onClick={removeItem}>Remove</button>
    </div>
  )
}