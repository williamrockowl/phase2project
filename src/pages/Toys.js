import React, { useState, useEffect } from 'react'
import Form from "../components/Form.js"
import "../styles/toys.css"

function Toys() {
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/toys', configObj)
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])

  useEffect(() => {
    console.log(toys)
  }, [toys])

 const configObj = {
  method: 'GET',
  headers: {'Content-Type': 'application/json'}
 }

  return (
    <div>
      <Form />
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