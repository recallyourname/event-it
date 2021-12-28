import React from 'react'
import textures from '../assets/Group 53.svg'
import logo from '../assets/logo.svg'
import emoji from '../assets/image 117.svg'

import s from '../styles/EventDetails.module.css'

export default function EventDetails() {
    return (
        <div>
            
            <div className={s.header}>
                <img src={logo} className={s.logo} />
                <div className={s.avatar}></div>
            </div>
            
            <div className={s.content}>
                <div className={s.leftColumn}>
                    <div className={s.emojiWrapper}>
                        <img src={emoji} className={s.emoji}/>
                    </div>  

                    <div className={s.date}>
                        Friday, Nov 8
                    </div>

                    <div className={s.location}>
                        OmGTU, 6-200a
                    </div>
                    
                </div>

                <div className={s.rightColumn}>
                    <div className={s.title}>
                        Event title whatever
                    </div>

                    <button className={s.accept}>
                        Я иду! 
                    </button>

                    <button className={s.changeDecision}>
                        Изменить решение
                    </button>
                </div>

            </div>

            <img src={textures} className={s.textures} />
        </div>
    )
}
