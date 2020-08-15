import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let PostElements = props.PostData.map(post => <Post message={post.text} count={post.count} />)


    let newPostElement=React.createRef();
    let addPost=()=>{
        // props.addPost()
        props.dispatch({type:'ADD-POST'})
    }
    
    let onPostChange=()=>{
        let text=newPostElement.current.value;
        // props.updatePostText(text)
        let action = {
            type:'UPDATE-POST-TEXT',
            text:text
    }
        props.dispatch(action); 
    }



    return (
        <div className={s.postsBlock}>
            <h3>My Posts:</h3>
            <div>
                <div>
                    <textarea
                    ref={newPostElement}
                    className={s.textarea}
                    onChange={onPostChange}
                    value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostElements}
            </div>
        </div>
    )
}

export default MyPosts