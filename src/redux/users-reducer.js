const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return{...state, users: [...state.users, ...action.users]}
        default: 
            return state;
    }


}

export let followAC = (userID) => {
    return {
        type: FOLLOW,
        userID
    }
}

export let unfollowAC = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
}

export let setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;