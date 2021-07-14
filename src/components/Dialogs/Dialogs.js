import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import MessagesItems from './MessagesItems/MessagesItems';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItems name={d.name} id={d.id} img={d.img} />)
    let messagesElements = props.dialogsPage.messages.map(m => <MessagesItems message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;