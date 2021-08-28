import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import Avatar from './Avatar.jpg';
import s from './Profile.module.css';
import unknown from '../../../assets/images/1.png'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.nameBlock}>
                <h2 className={s.nameBlock__name}>{props.profile.fullName}</h2>
            </div>
            <div className={s.acquaintance}>
                <img className={s.acquaintance__avatar} src={props.profile.photos.large === null ? unknown : props.profile.photos.large} />
                <div className={s.acquaintance__description}>
                    {props.profile.aboutMe}
                </div>
                <div className={s.acquaintance__contacts}>
                    <div className={s.acquaintance__items}>
                        <a target="_blank" href={`https://uk-ua.${props.profile.contacts.facebook}`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/2048px-Facebook_F_icon.svg.png" /></a>
                    </div>
                    <div className={s.acquaintance__items}>
                        <a target="_blank" href={`https://uk-ua.${props.profile.contacts.vk}`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vk_Logo.svg/1024px-Vk_Logo.svg.png" /></a>
                    </div>
                    <div className={s.acquaintance__items}>
                        <a target="_blank" href={`https://uk-ua.${props.profile.contacts.twitter}`}><img src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png" /></a>
                    </div>
                    <div className={s.acquaintance__items}>
                        <a target="_blank" href={`https://uk-ua.${props.profile.contacts.instagram}`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;