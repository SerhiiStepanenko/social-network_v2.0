import React from "react";
import DialogsItems from "../../Dialogs/DialogsItems/DialogsItems";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} countLikes={p.countLikes}/>)

    return (
            <div className={s.centralPart}>
                <h2 className={s.centralPart__title}>My posts</h2>
                <textarea placeholder="your newss..." className={s.centralPart__postArea}></textarea>
                <div>
                    <button>Send</button>
                </div>
                {postsElement}
            </div>

    );
}

export default MyPosts;