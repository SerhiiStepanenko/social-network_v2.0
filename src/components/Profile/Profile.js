import React from "react";
import s from './Main.module.css';
import MyPostsContainerosts from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <main className={s.main}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainerosts/>
        </main>
    );
}

export default Profile;