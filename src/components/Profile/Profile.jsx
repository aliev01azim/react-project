import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
    return (
        <div className = {s.Content}>
            <ProfileInfo 
            profil={props.profil}
            />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}


export default Profile;