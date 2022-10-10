import React, { useState, useEffect } from 'react'
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
      {toys.map((toy) => (
        <div className="toy-container">
          <p>ID: {toy.id}</p>
          <p>Name: {toy.name}</p>
          <img className="toys-img" src={toy.image} />
          <p>Likes: {toy.likes}</p>
        </div>
      ))}
    </div>
  )
}

export default Toys