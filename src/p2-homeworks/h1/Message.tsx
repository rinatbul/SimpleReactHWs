import React from 'react'
import s from './Message.module.css'

type MessagePropsType={
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props:MessagePropsType) {
    return (
        <div className={s.mainWrapper}>
            <div className={s.wrapper}>
                <div className={s.avatar}><img src={props.avatar} alt="avatar"/></div>
                <div className={s.messageWrapper}>
                    <div className={s.messageText}>
                        <div className={s.name}>{props.name}</div>
                        <div className={s.message}>{props.message}</div>
                    </div>
                    <div className={s.time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Message
