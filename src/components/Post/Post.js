import React from 'react';
import './Post.css';

const Post = (props) => {   
 
    return (
        <div className='post' onClick={() => props.onClickHandle(props.post)}>
            <p>Id: {props.post?.id}</p>
            <p>Title: {props.post?.title}</p>
            <p>Author: {props.post?.author}</p>
        </div>
    );
}

export default Post;