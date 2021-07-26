import {combineReducers, createStore} from 'redux';
import mainReducer from './main-reducer';
import dialogsReducer from './dialogs-reducer';


let reducers = combineReducers({
    mainPage: mainReducer,
    dialogsPage: dialogsReducer,
})

let store = createStore(reducers)

export default store;