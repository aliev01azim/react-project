import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';


 
const Dialogs = (props) => {
    

    let DialogsElements = props.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);


    let MessagesElements = props.MessagesData.map(message => <Message text={message.text} />)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {DialogsElements}
                </div>
                <div className={s.messages}>
                    {MessagesElements}
                </div>
            </div>
        </div>
    )
}


export default Dialogs