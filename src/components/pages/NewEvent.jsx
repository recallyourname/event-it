import React from "react";
import s from "../styles/NewEvent.module.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NewEvent() {
  const [data, setData] = useState(null)
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("setting submit to true");
    setIsSubmitted(true);
  };

  fetch("../../mockup/events.json")
    .then((r) => console.log(r))

  useEffect(() => {
    console.log(data)
  });
  // useEffect(() => {
  //   if (isSubmitted === true) {
  //     data.push({
  //       id: 111,
  //       event_title: title,
  //       participants_num: 111,
  //       date: date,
  //       location: location,
  //       description: description
  //     })
  //     navigate('/')
  //   }
  // });

  return (
    <div className={s.container}>
      <div className={s.returnWrapper}>
        <Link to="/" style={{ textDecoration: 'none', color: "#2A6AC8", fontWeight: "bold", marginTop: "10px" }}>{"Return"}</Link>
      </div>
      
      <h1 className={s.title} style={{color: "#2A6AC8"}}>Create new Event!</h1>
      <form action="" onSubmit={handleSubmit}>
        <p>Event Title</p>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p>Date</p>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <p>Location</p>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <p>Description</p>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p></p>
        <input type="submit" className={s.submitButton} />
      </form>
    </div>
  );
}
