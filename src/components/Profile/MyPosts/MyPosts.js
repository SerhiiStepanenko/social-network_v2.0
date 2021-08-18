import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} countLikes={p.countLikes} />)

    let newPostText = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () =>{
        let text = newPostText.current.value;
        props.updateNewPost(text)
    }

    return (
        <div className={s.centralPart}>
            <h2 className={s.centralPart__title}>My posts</h2>
            <textarea
                placeholder="your newss..."
                className={s.centralPart__postArea} 
                ref={newPostText}
                onChange={onPostChange}
                value={props.profilePage.newPostText}/>
                
            <div>
                <button onClick={onAddPost}>Send</button>
            </div>
            {postsElement}
        </div>

    );
}

export default MyPosts;