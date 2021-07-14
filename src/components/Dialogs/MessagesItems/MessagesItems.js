import React from 'react';
import s from './MessagesItems.module.css';

const MessagesItems = (props) => {
    return (
            <div className={s.message}>
                <span>{props.message}</span>
            </div>
    )
}
export default MessagesItems;