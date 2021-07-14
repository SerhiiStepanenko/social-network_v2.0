import React from "react";
import s from './Main.module.css';
import MyPosts from "./MyPosts/MyPosts"; 
import Profile from "./Profile/Profile";

const Main = (props) => {

    return (
        <main className={s.main}>
            <Profile/>
            <MyPosts posts={props.mainPage.posts}/>
        </main>
    );
}

export default Main;