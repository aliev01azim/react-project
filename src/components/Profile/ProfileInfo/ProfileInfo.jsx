import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src="https://bugaga.ru/uploads/posts/2018-09/1537046126_1.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                ava+ description
            </div>
        </div>

    )
}


export default ProfileInfo;