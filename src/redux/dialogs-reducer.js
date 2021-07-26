const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 2,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText;
            return state;
        default: return state;
    }
}

export let addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export let updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageText: text
    }
}

export default dialogsReducer;