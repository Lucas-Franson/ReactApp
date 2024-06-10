import { useState } from 'react';
import Post from './Post';

const Posts = (props) => {
    
    const postOnClickHandler = (post) => {
        props.setPost(post);
    }

    const postList = props.posts.map(post => {
        return (
            <Post onClickHandle={postOnClickHandler} key={post.id} post={post} />
        );
    });
    
    return (
        <div className='posts'>
            {postList}
        </div>
    );
}

export default Posts;