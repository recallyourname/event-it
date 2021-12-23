import React from "react";
import s from "../styles/CreateEventButton.module.css";

export default function CreateEventButton() {
  return (
    <div>
      <button className={s.btn}>
        <span className={s.textCol}>
          <span className={s.createEvent}>Create event</span>
          <span className={s.description}>Create your own event</span>
        </span>
        <span className = {s.plusSign}>+</span>
      </button>
    </div>
  );
}
