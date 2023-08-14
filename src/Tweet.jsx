/* eslint-disable react/prop-types */
export function Tweet({ id, name, content, like, onDelete, onLike }) {



  return (
  <div className="tweet">
    <button className="delete" onClick={() => onDelete(id)}>❌</button>
    <h3>{name}</h3>
    <p>{content}</p>
    <button className="like" onClick={() => onLike(id)}>{like} ❤️</button>
  </div>
  )
}
