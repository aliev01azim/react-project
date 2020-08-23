import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let PostElements = props.PostData.map(post => <Post message={post.text} count={post.count} />)

    let newPostElement=React.createRef();
    let AddPost=()=>{
        props.addPost()
    }
    
    let onPostChange=()=>{
        let text=newPostElement.current.value;
        props.onPostChange(text)
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
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostElements}
            </div>
        </div>
    )
}

export default MyPosts