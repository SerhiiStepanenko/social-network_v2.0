import {combineReducers, createStore} from 'redux';
import mainReducer from './main-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';


let reducers = combineReducers({
    mainPage: mainReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers)

export default store;