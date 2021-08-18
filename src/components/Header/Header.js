import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../logo.svg';
import s from './Header.module.css'

const Header = (props) => {
    return (
            <header className={s.header}>
                <img src={logo} className={s.header__logo} alt="logo" />
                <h2 className={s.header__banner}>React social-network</h2>
                <div className={s.logoBlock}>
                    {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
                    
                </div>
            </header>
    );
}

export default Header;