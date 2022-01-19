import React from "react";
import s from "./styles/NearestEvent.module.css";
import events from "../../mockup/events";
import emoji from "../assets/emoji.png";

export default function NearestEvent() {
  var nearestEvent;
  var tempDate = new Date("2030-01-01");
  var compare;

  events.forEach((event) => {
    compare = new Date(event.date);

    if (compare < tempDate) {
      tempDate = compare;
      nearestEvent = event.id;
    }
  });

  const eventContext = events.find((event) => event.id === nearestEvent);

  return (
    <div className={s.container}>
      <div className={s.title}>
        <div className={s.imageWrapper}>
          <img src={emoji} alt="emoji" className={s.picture} />
        </div>
        <h2>{eventContext.event_title}</h2>
      </div>
      <div className={s.description}>
        {"Описание мероприятия:"}
        <p>{eventContext.description}</p>
      </div>

      <div className={s.dateAndLocation}>
        <p>Когда? {eventContext.date}</p>
        <p>Где? {eventContext.location}</p>
      </div>
      <div className={s.btnWrapper}>
        <button
          className={s.btnMore}
          onClick={() => {
            console.log("btn more");
          }}
        >
          More
        </button>
      </div>
    </div>
  );
}
