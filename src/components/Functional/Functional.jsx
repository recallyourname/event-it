import React from "react";
import FunctionalButton from "./FunctionalButton";
import Bell from "../assets/bell.svg";
import Pen from "../assets/pen.svg";
import Exit from "../assets/exit.svg";
import s from "./styles/Functional.module.css";
import { useNavigate } from "react-router-dom";

export default function Functional(props) {
  const navigate = useNavigate();

  function handleLogout(){
    localStorage.setItem("isLoggedIn", false)
    navigate("/login")
  }

  return (
    <div className={s.container}>
      <span className={(s.firstname, s.text)}>{props.firstname}</span>
      <span className={(s.lastname, s.text)}>{props.lastname}</span>
      <div className={s.buttonsContainer}>
        <FunctionalButton image={Bell} />
        <FunctionalButton image={Pen} />
        <FunctionalButton
          image={Exit}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}
