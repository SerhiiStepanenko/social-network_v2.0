import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

// const DialogsContainer = (props) => {
//     let state = props.store.getState()

//     let addMessage = () => {
//         props.store.dispatch(addMessageActionCreator())
//     }

//     let updateNewMessage = (text) => {
//         let action = updateNewMessageActionCreator(text)
//         props.store.dispatch(action)
//     }

//     return (<Dialogs newMessageText={state.dialogsPage.newMessageText} messages={state.dialogsPage.messages} dialogs={state.dialogsPage.dialogs} updateNewMessage={updateNewMessage} addMessage={addMessage} />)
// }


let mapStateToProps = (state) => {
    debugger;
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            let action = updateNewMessageActionCreator(text)
            dispatch(action)
        },
        addMessage: () =>{
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;