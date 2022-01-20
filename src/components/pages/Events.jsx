import React from "react";
import s from "../styles/Events.module.css";
import EventCard from "../EventCard/EventCard";

export default function Events(props) {
  const cards = props.events
    .slice(0, 4)
    .map((event) => (
      <EventCard
        event={event}
        key={event.id}
        id={event.id}
        title={event.event_title}
        participants={event.participants_num}
        date={event.date}
        location={event.location}
        description={event.description}
      />
    ));

  return (
    <div>
      
      <div className={s.container}>{cards}</div>
    </div>
  );
}
