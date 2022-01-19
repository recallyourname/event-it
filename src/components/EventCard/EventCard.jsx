import React from "react";
import s from "./styles/EventCard.module.css";
import Image from "../assets/emoji.png";
import Recent from "../assets/mockcircles.svg"

export default function EventCard(props) {
  console.log(props)
  return (
    <div className={s.container}>

      <div className={s.upperLine}>
        <div className={s.imageWrapper}>
          <img src={Image} className={s.picture} alt="emoji"/> 
        </div>
        <div className={s.eventData}>
          <p className={s.date}>{props.date}</p>
          <p className={s.location}>{props.location}</p>
        </div>
        

      </div>

      <div className={s.title}>
        {props.title}
      </div>

      <div className={s.thirdLine}>
        <img src={Recent} alt="mock" />
        <div className={s.participants}>
          <>{props.participants} participants</>
          <button className={s.btnParticipants}>
            See more
          </button>
        </div>
      </div>

      <div className={s.lastLine}>
        <button className={s.btnMore} onClick={()=>{
          console.log("btn more")
        }}>
          More
        </button>
      </div>
      
      
    </div>
  );
}
