import React from "react";
import s from "../styles/EventDetails.module.css"
import emoji from "../assets/image 117.svg";

export default function EventDetailsContent(props) {
  return (
    <div className={s.content}>
      <div className={s.leftColumn}>
        <div className={s.emojiWrapper}>
          <img src={emoji} className={s.emoji} alt="emoji"/>
        </div>

        <div className={s.date}>{props.date}</div>

        <div className={s.location}>{props.location}</div>
      </div>

      <div className={s.rightColumn}>
        <div className={s.title}>{props.title}</div>

        <div className={s.btnGroup}>
          <button className={s.accept}>Я иду!</button>
          <button className={s.changeDecision}>Изменить решение</button>
        </div>
      </div>
    </div>
  );
}
