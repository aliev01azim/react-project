import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';


 
const Dialogs = (props) => {
    

    let DialogsElements = props.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let MessagesElements = props.MessagesData.map(message => <Message text={message.text} />)

    let newMessageElement=React.createRef();
    let addMessage=()=>{
        let mes=newMessageElement.current.value;
        props.addMessage(mes)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {DialogsElements}
                </div>
                <div className={s.messages}>
                    {MessagesElements}
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs