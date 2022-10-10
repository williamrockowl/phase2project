import React, { useState, useEffect } from "react";
import Form from "../components/Form.js";
import "../styles/toys.css";

function Toys() {
  const [toys, setToys] = useState([]);

  const [name, setName] = useState("");
  const [likes, setLikes] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/toys", configObjGet)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const configObjGet = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

 const configObjPost = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    name: name,
    likes: likes,
    image: image
  })
 }
 
 const handleForm = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/toys', configObjPost)
     .then(res => res.json())
     .then(data => console.log(data)) 
  }

  return (
    <div>
      <Form
        name={name}
        likes={likes}
        image={image}
        setName={setName}
        setLikes={setLikes}
        setImage={setImage}
        handleForm={handleForm}
      />
      {toys.map((toy) => (
        <div key={toy.id} className="toy-container">
          <p>ID: {toy.id}</p>
          <p>Name: {toy.name}</p>
          <p>Likes: {toy.likes}</p>
          <img className="toys-img" src={toy.image} />
        </div>
      ))}
    </div>
  );
}

export default Toys;
