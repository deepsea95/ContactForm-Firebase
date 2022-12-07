import React, { useState } from "react";
import "./App.css";
import { collection, addDoc } from "firebase/firestore/lite";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    setName("");
    setEmail("");
    setMessage("");
  };

  const saveChange = async() => {
    await addDoc(collection(props.db, "contacts"),{
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      setLoader(false);
      alert("Your message has been submitted👍");
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });
  }
 
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        onClick={saveChange}
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;