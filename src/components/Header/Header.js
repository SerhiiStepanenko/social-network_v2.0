import React from "react";
import logo from '../../logo.svg';
import s from './Header.module.css'

const Header = () => {
    return (
            <header className={s.header}>
                <img src={logo} className={s.header__logo} alt="logo" />
                <h2 className={s.header__banner}>React social-network</h2>
            </header>
    );
}

export default Header;