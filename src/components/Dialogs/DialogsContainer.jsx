import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';

// const DialogsContainer = (props) => {


//     let AddMessage = () => {
//         props.store.dispatch(addMessageActionCreator())
//     }
//     let onMessageChange = (text) => {
//         props.store.dispatch(updateMessageTextActionCreator(text))
//     }
//     let state = props.store.getState()
//     return (
//         <Dialogs
//             AddMessage={AddMessage}
//             onMessageChange={onMessageChange}
//             DialogsData={state.MessagePage.DialogsData}
//             MessagesData={state.MessagePage.MessagesData}
//             newMessageText={state.MessagePage.newMessageText}
//         />
//     )
// }
let mapStateToProps = (state) => {
    return {
        DialogsData: state.MessagePage.DialogsData,
        MessagesData: state.MessagePage.MessagesData,
        newMessageText: state.MessagePage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        AddMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        }
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

