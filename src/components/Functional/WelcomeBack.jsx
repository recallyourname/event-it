import React from "react";
import s from "./styles/WelcomeBack.module.css";

export default function WelcomeBack(props) {
  return (
    <div className={s.container}>
      <div className={s.titleWrapper}>Welcome back, {props.firstname}!</div>
    </div>
  );
}
