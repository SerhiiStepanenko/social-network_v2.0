import React from "react";
import s from './Main.module.css';
import MyPostsContainerosts from "./MyPosts/MyPostsContainer";
import Profile from "./Profile/Profile";

const Main = (props) => {

    return (
        <main className={s.main}>
            <Profile />
            <MyPostsContainerosts/>
        </main>
    );
}

export default Main;