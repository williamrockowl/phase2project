import React, { useState, useEffect } from 'react'
import Form from "../components/Form.js"
import "../styles/toys.css"

function Toys() {
  const [toys, setToys] = useState([])

  const [name, setName] = useState("")
  const [likes, setLikes] = useState(0)
  const [image, setImage] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/toys', configObj)
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])

 const configObj = {
  method: 'GET',
  headers: {'Content-Type': 'application/json'}
 }

  return (
    <div>
      <Form name={name} likes={likes} image={image} setName={setName} setLikes={setLikes} setImage={setImage} />
      {toys.map((toy) => (
        <div key={toy.id} className="toy-container">
          <p>ID: {toy.id}</p>
          <p>Name: {toy.name}</p>
          <p>Likes: {toy.likes}</p>
          <img className="toys-img" src={toy.image} />
        </div>
      ))}
    </div>
  )
}

export default Toys