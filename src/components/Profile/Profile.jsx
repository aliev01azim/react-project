import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
    debugger;
    return (
        <div className = {s.Content}>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}


export default Profile;