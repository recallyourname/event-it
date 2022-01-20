import React from "react";
import logo from "../assets/logo.svg";  
import s from "../styles/EventDetails.module.css"
import { useNavigate } from "react-router-dom";
import users from "../../mockup/users"

export default function EventDetailsHeader() {

  const navigate = useNavigate();
  var avatar;
  const handleLogoClick = () => {
    navigate("/");
  }

  users.forEach(element => {
    localStorage.getItem("email") === element.email && (avatar = element.avatar)
  });

  return (
    <div className={s.header}>
      <img src={logo} className={s.logo} alt="logo" onClick={handleLogoClick} />
      <div className={s.avatarWrapper}>
        <img src={avatar} alt="avatar" className={s.avatar}/>
        {localStorage.getItem("firstname")}
      </div>
    </div>
  );
}
