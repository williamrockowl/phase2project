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
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      likes: likes,
      image: image,
    }),
  };

  async function handleForm(e) {
    e.preventDefault();

    await fetch("http://localhost:3000/toys", configObjPost)
      .then((res) => res.json())
      .then((data) => addToy(data));

    setName("");
    setLikes(0);
    setImage("");
  }

  function addToy(newToy) {
    setToys([...toys, newToy]);
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
