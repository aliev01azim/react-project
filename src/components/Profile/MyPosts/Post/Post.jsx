import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.Post}>
            <div>
                <img src='https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
            </div>
            {props.message}
            <div>
                <span className = {s.green}>like {props.count}</span>
            </div>
        </div>
    )
}


export default Post