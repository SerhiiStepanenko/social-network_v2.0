import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                <img src="https://thumbs.dreamstime.com/b/nicolas-cage-%D0%BD%D0%B0-sxsw-38863907.jpg"/>
                <span>{props.message}</span>
                <div className={s.likeBlock}>
                    <span>like {props.countLikes}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;