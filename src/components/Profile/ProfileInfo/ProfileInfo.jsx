import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profil ) {
        return <div>
            <h1>Preloader blyat</h1>
        </ div >
    }
   
        return (
        <div className={s.profileInfo}>
            <div>
                <img src="https://bugaga.ru/uploads/posts/2018-09/1537046126_1.jpg" />
            </div>
            
            <div className={s.descriptionBlock}>
            <img src={props.profil.photos.large} />
               <div>
               {props.profil.fullName}
               </div>
               <div>
               {props.profil.aboutMe}
               </div>
               <div>
               {props.profil.lookingForAJob ? <h1>Da</h1> : <h1>Net</h1>}
               </div>
               <div>
               {props.profil.lookingForAJobDescription}
               </div>
               <div>
               {props.profil.contacts.facebook}
               </div>
               <div>
               {props.profil.contacts.vk}
               </div>
               <div>
               {props.profil.contacts.twitter}
               </div>
               <div>
               {props.profil.contacts.instagram}
               </div>
               <div>
               {props.profil.contacts.github}
               </div>
            </div>
        </div>
        )
}


export default ProfileInfo;