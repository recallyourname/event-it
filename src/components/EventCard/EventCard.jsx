import React from "react";
import s from "./styles/EventCard.module.css";
import Image from "../assets/emoji.png";
import Recent from "../assets/mockcircles.svg";
import { useNavigate } from "react-router-dom";

export default function EventCard(props) {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <div className={s.upperLine}>
        <div className={s.imageWrapper}>
          <img src={Image} className={s.picture} alt="emoji" />
        </div>
        <div className={s.eventData}>
          <p className={s.date}>{props.date}</p>
          <p className={s.location}>{props.location}</p>
        </div>
      </div>

      <div className={s.title}>{props.title}</div>

      <div className={s.thirdLine}>
        <img src={Recent} alt="mock" />
        <div className={s.participants}>
          <>{props.participants} participants</>
          <button className={s.btnParticipants}>See more</button>
        </div>
      </div>

      <div className={s.lastLine}>
        <button
          className={s.btnMore}
          onClick={() => {
            navigate(`/event/${props.id}`, {
              state: {
                description: props.description,
                title: props.title,
                date: props.date,
                location: props.location,
              },
            });
          }}
        >
          More
        </button>
      </div>
    </div>
  );
}
