import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = (props) => {


    let PostElements = props.PostData.map(post => <Post message={post.text} count={post.count} />)

    return (
        <div className={s.postsBlock}>
            <h3>My Posts:</h3>
            <div>
                <div>
                    <textarea className={s.textarea}></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostElements}
            </div>
        </div>
    )
}


export default MyPosts