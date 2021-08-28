import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", countLikes: "14" },
        { id: 2, message: "It's my first post", countLikes: "45" },
    ],
    newPostText: "",
    profile: null
};

let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                countLikes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.postText
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default: return state;
    }
}

export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export let updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        postText: text
    }
}

export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export let getProfileContainerThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => { dispatch(setUserProfile(data)) })
    }
}

export default mainReducer;