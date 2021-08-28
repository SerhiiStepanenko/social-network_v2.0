import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURENT_PAGE = 'SET_CURENT_PAGE';
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
            return { ...state, users: action.users }
        case SET_CURENT_PAGE:
            return { ...state, currentPage: action.curentPage }
        case SET_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }


}

export let follow = (userID) => {
    return {
        type: FOLLOW,
        userID
    }
}

export let unfollow = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
}

export let setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export let setCurentPage = (curentPage) => {
    return {
        type: SET_CURENT_PAGE,
        curentPage
    }
}

export let setTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

export let toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export let toggleIsFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsersContainerThankCreator = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurentPage(currentPage))
        usersAPI.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
            })
    }
}
export const getUsersUnfollowThankCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, id))
        usersAPI.deleteUsers(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollow(id)) 
                }
                dispatch(toggleIsFollowingInProgress(false, id))
            })
    }
}
export const getUsersFollowThankCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, id))
        usersAPI.postUsers(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(follow(id)) 
                }
                dispatch(toggleIsFollowingInProgress(false, id))
            })
    }
}

export default usersReducer;