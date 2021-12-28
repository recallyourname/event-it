import React from "react";
import s from "../styles/Events.module.css";
import EventCard from "../EventCard/EventCard";

export default function Events() {
  const axios = require("axios");

  return (
    <div className={s.container}>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}
