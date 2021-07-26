import mainReducer from "./main-reducer";
import dialogsReducer from './dialogs-reducer';


let store = {
    _callSubscriber(){},
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Vycheslav", img: "https://www.eg.ru/wp-content/uploads/2018/07/floyd_mayweather.jpg" },
                { id: 2, name: "Bogdan", img: "https://ath2.unileverservices.com/wp-content/uploads/sites/7/2018/08/shutterstock-9640561qx-1024x683.jpg" },
                { id: 3, name: "Nasty", img: "https://wfc.tv/f/Post/34487/thumb_74375058-798671133908523-2441966877374356079-n.jpg" },
            ],
            messages: [
                { id: 1, message: "Hi, how are you?" },
                { id: 2, message: "Yo" },
            ],
            newMessageText: ""
        },
        mainPage: {
            posts: [
                { id: 1, message: "Hi, how are you?", countLikes: "14" },
                { id: 2, message: "It's my first post", countLikes: "45" },
            ],
            newPostText: ""
        }
    },

    getState(){
        return this._state;
    },
    subscriber(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.mainPage = mainReducer(this._state.mainPage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
        
    }

}





export default store;