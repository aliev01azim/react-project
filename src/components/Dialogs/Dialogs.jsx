import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

 
const Dialogs = (props) => {
    

    let DialogsElements = props.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let MessagesElements = props.MessagesData.map(message => <Message text={message.text} id={message.id}/>)

    let newMessageElement=React.createRef();
    let AddMessage=()=>{
        props.AddMessage()
    }
    let onMessageChange=()=>{
        let text=newMessageElement.current.value;
        props.onMessageChange(text)
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {DialogsElements}
                </div>
                <div className={s.messages}>
                    {MessagesElements}
                    <textarea 
                    ref={newMessageElement} 
                    value={props.newMessageText} 
                    onChange={onMessageChange}/>
                    <button onClick={AddMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs