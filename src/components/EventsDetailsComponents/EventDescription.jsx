import React from 'react'
import s from './styles/EventDescription.module.css'

export default function EventDescription(props) {
    return (
        <div className={s.wrapper}>
            <div class={s.description}>
                <h2 className={s.descriptionTitle}>Description of Event</h2>
                <p className={s.descriptionText}>
                    {props.description}
                </p>
            </div>            
        </div>
    )
}
