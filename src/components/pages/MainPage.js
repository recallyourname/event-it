import React from "react";
import Image from "../assets/logo.svg";
import CreateEventButton from "../buttons/CreateEventButton";
import Navbar from "../navigation/Navbar";
import s from "../styles/MainPage.module.css";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Avatar from "../Avatar/Avatar";
import Functional from "../Functional/Functional";
import WelcomeBack from "../Functional/WelcomeBack";
import NearestEvent from "../Functional/NearestEvent";
import Events from "./Events";


export default function MainPage() {
  return (
    <div className={s.layout}>
  
      <div className={s.leftWrapper}>
        <img src={Image} alt="logo" className={s.logo} />
        <div className={s.upperLine}>
          <Avatar />     
          <Functional firstname={"Igor"} lastname={"Kutasevich"}/>
          <CreateEventButton />
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
        <Events />
      </div>

    </div>
  );
}
