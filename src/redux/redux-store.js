import {combineReducers, createStore} from 'redux';
import mainReducer from './main-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';


let reducers = combineReducers({
    profilePage: mainReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers)

export default store;