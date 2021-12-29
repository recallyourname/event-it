import React from "react";
import s from "./styles/EventCard.module.css";
import Image from "../assets/emoji.png";
import Recent from "../assets/mockcircles.svg"
import { Link, useNavigate } from 'react-router-dom';

export default function EventCard() {
  return (
    <div className={s.container}>

      <div className={s.upperLine}>
        <div className={s.imageWrapper}>
          <img src={Image} className={s.picture}/> 
        </div>
        <div className={s.eventData}>
          <p className={s.date}>Friday, Nov 8</p>
          <p className={s.location}>Omgtu, 6-220a</p>
        </div>
        

      </div>

      <div className={s.title}>
        Event title whatever
      </div>

      <div className={s.thirdLine}>
        <img src={Recent} alt="mock" />
        <div className={s.participants}>
          100 participants
          <button className={s.btnParticipants}>
            See more
          </button>
        </div>
      </div>

      <div className={s.lastLine}>
        <button className={s.btnMore}>
          More
        </button>
      </div>
      
      
    </div>
  );
}
