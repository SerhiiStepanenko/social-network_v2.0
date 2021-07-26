const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", countLikes: "14" },
        { id: 2, message: "It's my first post", countLikes: "45" },
    ],
    newPostText: ""
};

let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                countLikes: 0
            }
            state.posts.push(newPost)
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.postText;
            return state;
        default: return state;
    }
}

export let addPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
}

export let updateNewPostActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_POST_TEXT, 
        postText: text
    }
}

export default mainReducer;