import React from 'react'
import "../styles/toys.css"

function Form(props) {
  return (
    <form className="form-container">
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Enter name of toy" id="name" value={props.name} onChange={(e) => props.setName(e.target.value)} />
      <label htmlFor="likes">Likes</label>
      <input type="number" placeholder="Enter number of likes" id="likes" value={props.likes} onChange={(e) => props.setLikes(e.target.value)} />
      <label htmlFor="image">Image</label>
      <input id="image" type="text" placeholder="Enter full image url" value={props.image} onChange={(e) => props.setImage(e.target.value)} />
    </form>
  )
}

export default Form 