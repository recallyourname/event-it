import React from 'react'
import s from "./styles/FunctionalButton.module.css"

export default function FunctionalButton(props) {
    return (
        <div>
            <button className={s.btn}>
                <img src={props.image} alt="alt" />
            </button>
        </div>
    )
}
