import React from "react";
import textures from "../assets/Group 53.svg";
import logo from "../assets/logo.svg";
import emoji from "../assets/image 117.svg";
import s from "../styles/EventDetails.module.css";
import EventDescription from "../EventsDetailsComponents/EventDescription";
import EventOrganizers from "../EventsDetailsComponents/EventOrganizers";
import ReactFullpage from "@fullpage/react-fullpage";

export default function EventDetails() {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className={s.container}>
                <div className={s.header}>
                  <img src={logo} className={s.logo} />
                  <div className={s.avatar}></div>
                </div>

                <img src={textures} className={s.textures} />

                <div className={s.content}>
                  <div className={s.leftColumn}>
                    <div className={s.emojiWrapper}>
                      <img src={emoji} className={s.emoji} />
                    </div>

                    <div className={s.date}>Friday, Nov 8</div>

                    <div className={s.location}>OmGTU, 6-200a</div>
                  </div>

                  <div className={s.rightColumn}>
                    <div className={s.title}>Event title</div>

                    <div className={s.btnGroup}>
                      <button className={s.accept}>Я иду!</button>
                      <button className={s.changeDecision}>
                        Изменить решение
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <EventDescription />
            </div>
            <div className="section">
              <EventOrganizers />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

  // return (
  //     <div>

  // <div className={s.container}>
  //     <div className={s.header}>
  //         <img src={logo} className={s.logo} />
  //         <div className={s.avatar}></div>
  //     </div>

  //     <img src={textures} className={s.textures} />

  //     <div className={s.content}>
  //         <div className={s.leftColumn}>
  //             <div className={s.emojiWrapper}>
  //                 <img src={emoji} className={s.emoji}/>
  //             </div>

  //             <div className={s.date}>
  //                 Friday, Nov 8
  //             </div>

  //             <div className={s.location}>
  //                 OmGTU, 6-200a
  //             </div>

  //         </div>

  //         <div className={s.rightColumn}>
  //             <div className={s.title}>
  //                 Event title whatever
  //             </div>

  //             <button className={s.accept}>
  //                 Я иду!
  //             </button>

  //             <button className={s.changeDecision}>
  //                 Изменить решение
  //             </button>
  //         </div>

  //     </div>
  // </div>

  //         <EventDescription />

  //         <EventOrganizers />

  //     </div>
  // )
}
