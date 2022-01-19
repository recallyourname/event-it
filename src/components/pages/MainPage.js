import React, { useEffect } from "react";
import Image from "../assets/logo.svg";
import CreateEventButton from "../buttons/CreateEventButton";
import s from "../styles/MainPage.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Avatar from "../Avatar/Avatar";
import Functional from "../Functional/Functional";
import WelcomeBack from "../Functional/WelcomeBack";
import NearestEvent from "../Functional/NearestEvent";
import Events from "./Events";
import events from "../../mockup/events";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn")

  var userContext = {
    email: localStorage.getItem("email"),
    firstname: localStorage.getItem("firstname"),
    lastname: localStorage.getItem("lastname"),
    userId: localStorage.getItem("userId")
  }

  function handleCreateEvent() {
    navigate('/new')
  }

  useEffect(() => {
    isLoggedIn === "false" && navigate("/login")
  });

  return (
    <>
      <div className={s.layout}>
        <div className={s.leftWrapper}>
          <img src={Image} alt="logo" className={s.logo} />
          <div className={s.upperLine}>
            <Avatar />
            <Functional firstname={userContext.firstname} lastname={userContext.lastname} />
            <CreateEventButton onClick={handleCreateEvent}/>
          </div>

          <div className={s.bottomLine}>
            <div className={s.leftContainer}>
              <WelcomeBack />
              <Calendar className={s.calendar} />
            </div>
            <div className={s.rightContainer}>
              <NearestEvent />
            </div>
          </div>
          {/* <Calendar /> */}
        </div>

        <div className={s.rightWrapper}>
          <Events events={events} />
        </div>
      </div>
    </>
  );
}
