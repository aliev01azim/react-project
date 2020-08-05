import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';



const DialogItems = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} >
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}

const Dialogs = (props) => {
    let DialogsData = [
        { id: 1, name: 'Azim' },
        { id: 2, name: 'Eldar' },
        { id: 3, name: 'Aluun' },
        { id: 4, name: 'Osmo' },
        { id: 5, name: 'Chika' },
        { id: 6, name: 'Nursalim' }
    ]

    let MessagesData = [
        { id: 1, text: 'Hello?' },
        { id: 2, text: 'How aye you Bro' },
        { id: 3, text: 'Are you ok?' }
    ]

    let DialogsElements = DialogsData.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />);


    let MessagesElements = MessagesData.map(message => <Message text={message.text} />)

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