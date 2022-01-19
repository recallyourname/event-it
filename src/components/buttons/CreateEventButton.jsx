import React from "react";
import s from "../styles/CreateEventButton.module.css";

export default function CreateEventButton(props) {
  return (
    <div>
      <button className={s.btn} onClick={props.onClick}>
        <span className={s.textCol}>
          <span className={s.createEvent}>Create event</span>
          <span className={s.description}>Create your own event</span>
        </span>
        <span className = {s.plusSign}>+</span>
      </button>
    </div>
  );
}
