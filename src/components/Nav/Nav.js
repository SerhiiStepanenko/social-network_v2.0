import React from "react";
import s from "./Nav.module.css";
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink className={s.navLink} activeClassName={s.active} exact to="/">Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.active} to="/messages">Messages</NavLink>
                </div>
                <div className={s.item}>  
                    <NavLink activeClassName={s.active} to="/news">News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.active} to="/music">Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={s.navLink} activeClassName={s.active} to="/users">Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
                </div>
                
            </nav>
    );
}

export default Nav;