import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/main-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//     let state = props.store.getState()

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }

//     let updateNewPost = (text) => {
//         let action = updateNewPostActionCreator(text)
//         props.store.dispatch(action)
//     }

//     return (<MyPosts posts={state.mainPage.posts} newPostText={state.mainPage.newPostText} updateNewPost={updateNewPost} addPost={addPost} />);
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPost: (text) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action)
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;