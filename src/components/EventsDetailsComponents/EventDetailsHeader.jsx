import React from "react";
import logo from "../assets/logo.svg";  
import s from "../styles/EventDetails.module.css"

export default function EventDetailsHeader() {
  return (
    <div className={s.header}>
      <img src={logo} className={s.logo} />
      <div className={s.avatar}></div>
    </div>
  );
}
