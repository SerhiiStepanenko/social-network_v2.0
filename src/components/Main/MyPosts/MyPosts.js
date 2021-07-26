import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/main-reducer";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} countLikes={p.countLikes} />)

    let newPostText = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () =>{
        let text = newPostText.current.value;
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <div className={s.centralPart}>
            <h2 className={s.centralPart__title}>My posts</h2>
            <textarea
                placeholder="your newss..."
                className={s.centralPart__postArea} 
                ref={newPostText}
                onChange={onPostChange}
                value={props.newPostText}/>
                
            <div>
                <button onClick={addPost}>Send</button>
            </div>
            {postsElement}
        </div>

    );
}

export default MyPosts;