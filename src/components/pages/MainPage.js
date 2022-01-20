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
import eventsList from "../../mockup/events";
import users from "../../mockup/users";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  var events = [];

  var userContext = {
    email: localStorage.getItem("email"),
    firstname: localStorage.getItem("firstname"),
    events: [],
    lastname: localStorage.getItem("lastname"),
    userId: localStorage.getItem("userId"),
  };

  userContext.events = users.find(
    (element) => element.email === userContext.email
  ).events;

  userContext.events.forEach((element) => {
    events.push(
      eventsList.find((event) => event.id === element)
    );
  });

  function handleCreateEvent() {
    navigate("/new");
  }

  useEffect(() => {
    isLoggedIn === "false" && navigate("/login");
  });

  return (
    <>
      <div className={s.layout}>
        <div className={s.leftWrapper}>
          <img src={Image} alt="logo" className={s.logo} />
          <div className={s.upperLine}>
            <Avatar user={userContext.email} />
            <Functional
              firstname={userContext.firstname}
              lastname={userContext.lastname}
            />
            <CreateEventButton onClick={handleCreateEvent} />
          </div>

          <div className={s.bottomLine}>
            <div className={s.leftContainer}>
              <WelcomeBack firstname={userContext.firstname} />
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
