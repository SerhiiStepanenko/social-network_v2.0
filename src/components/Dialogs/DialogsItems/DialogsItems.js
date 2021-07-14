import React from 'react';
import s from './DialogsItems.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItems = (props) => {
    return (
        <div className={s.dialog}>
            <img src={props.img} />
            <NavLink activeClassName={s.active} to={"/messages/" + props.id} >
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogsItems;