import React from "react";
import Avatar from './Avatar.jpg';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div>
            <div className={s.nameBlock}>
                <h2 className={s.nameBlock__name}>Serhii Stepanenko</h2>
            </div>
            <div className={s.acquaintance}>
                <img className={s.acquaintance__avatar} src={Avatar} />
                <div className={s.acquaintance__description}>
                    description
                </div>
            </div>
        </div>
    );
}

export default Profile;