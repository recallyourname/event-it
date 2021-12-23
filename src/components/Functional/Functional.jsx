import React from "react";
import FunctionalButton from "./FunctionalButton";
import Bell from "../assets/bell.svg";
import Pen from "../assets/pen.svg";
import Exit from "../assets/exit.svg";
import s from "./styles/Functional.module.css"


export default function Functional(props) {
  return (
    <div className={s.container}>
      <span className={s.firstname, s.text}>{props.firstname}</span>
      <span className={s.lastname, s.text}>{props.lastname}</span>
      <div className={s.buttonsContainer}>
        <FunctionalButton image={Bell} />
        <FunctionalButton image={Pen} />
        <FunctionalButton image={Exit} />
      </div>
    </div>
  );
}
