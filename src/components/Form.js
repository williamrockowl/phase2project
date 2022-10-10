import React from 'react'

function Form() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Enter name of toy" id="name" />
      <label htmlFor="likes">Likes</label>
      <input type="text" placeholder="Enter number of likes" id="likes" />
      <label htmlFor="image">Image</label>
      <input id="image" type="file" />
    </form>
  )
}

export default Form