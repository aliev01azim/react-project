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

    let MessagesData=[
        { id: 1, text: 'Hello?' },
        { id: 2, text: 'How aye you Bro' },
        { id: 3, text: 'Are you ok?' }
    ]

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <DialogItems name={DialogsData[0].name} id={DialogsData[0].id} />
                    <DialogItems name={DialogsData[1].name} id={DialogsData[1].id} />
                    <DialogItems name={DialogsData[2].name} id={DialogsData[2].id} />
                    <DialogItems name={DialogsData[3].name} id={DialogsData[3].id} />
                    <DialogItems name={DialogsData[4].name} id={DialogsData[4].id} />
                    <DialogItems name={DialogsData[5].name} id={DialogsData[5].id} />
                </div>
                <div className={s.messages}>
                    <Message text={MessagesData[0].text} />
                    <Message text={MessagesData[1].text} />
                    <Message text={MessagesData[2].text} />
                </div>
            </div>
        </div>
    )
}


export default Dialogs