import React from 'react';
import {updatePostTextActionCreator,addPostActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//     let addPost=()=>{
//         props.store.dispatch(addPostActionCreator())
//     }
//     let onPostChange=(text)=>{
//         props.store.dispatch(updatePostTextActionCreator(text)); 
//     }
//     let state= props.store.getState()

//     return (
//         <MyPosts 
//         updatePostText={onPostChange} 
//         addPost={addPost} 
//         PostData={state.ProfilePage.PostData}
//         newPostText={state.ProfilePage.newPostText}/>
//     )
// }
let mapStateToProps=(state)=>{
    return{
        PostData:state.ProfilePage.PostData,
        newPostText:state.ProfilePage.newPostText
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addPost:()=>dispatch(addPostActionCreator()),
        onPostChange:(text)=> dispatch(updatePostTextActionCreator(text))
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer
