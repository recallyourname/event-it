import React from 'react'
import s from './styles/Avatar.module.css'
import users from '../../mockup/users'

export default function Avatar(props) {
    
    var avatar;

    users.forEach(element => {
        props.user === element.email && (avatar = element.avatar)
    });

    return (
        <div className={s.imageWrapper}>
            <img src={avatar} alt="avatar" className={s.imageWrapper}/>
        </div>
    )
}
