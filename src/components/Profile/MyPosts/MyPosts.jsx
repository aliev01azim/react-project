import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let PostData=[
        { id: 1, text: 'Hello,my name is Azim?',count:2 },
        { id: 2, text: 'it is my first post?',count:25 },
        { id: 3, text: 'my second?',count:23 },
        { id: 4, text: 'Hello,my dfgd is Azim?',count:21 },
        { id: 5, text: 'saf,my name is Azim',count:12 },
        { id: 6, text: 'asdis Azim',count:0 }
    ]
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
                <Post  />
                <Post message={PostData[0].text} count={PostData[0].count} />
                <Post message={PostData[1].text} count={PostData[1].count} />
                <Post message={PostData[2].text} count={PostData[2].count} />
                <Post message={PostData[3].text} count={PostData[3].count} />
                <Post message={PostData[4].text} count={PostData[4].count} />
                <Post message={PostData[5].text} count={PostData[5].count} />
            </div>
        </div>
    )
}


export default MyPosts