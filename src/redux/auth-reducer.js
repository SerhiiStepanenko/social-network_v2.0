import { authAPI } from "../api/api";

const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA"


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default: 
            return state;
    }
}

export let setUserAuthData = (userId, login, email) =>{
    return{
        type: SET_USER_AUTH_DATA,
        data: {userId, login, email},
    }
}

export let getAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if(data.resultCode === 0){
                    let {id, login, email} = data.data;
                    dispatch(setUserAuthData(id, login, email))
                }
                
            })
    }
}

export default authReducer;