import React, { useState } from 'react';
import './Post.css';
import { addPost } from './PostService';
 
const PostAdd = (props) => {

    const [post, setPost] = useState({});

    const save = () => {
        addPost(post).then(() => {
            setPost({});
            props.fetchPostsFlag();
        }).catch(err => {
            console.log(err);
        });
    }
 
    return (
        <div className='post-add'>
            <div className='post-form'>
                <label for="title">Title</label>
                <input type="text" value={post.title} 
                    onChange={(e) => setPost({...post, title: e.target.value})} id="title" name="title" />

                <label for="author">Author</label>
                <input type="text" value={post.author}
                    onChange={(e) => setPost({...post, author: e.target.value})} id="author" name="author" />

                <label for="content">Content</label>
                <textarea id="content" onChange={(e) => setPost({...post, content: e.target.value})} 
                    value={post.content} name="content"></textarea>
            </div>
            <div className='post-form-btn'>
                <button onClick={save}>Add</button>
            </div>
        </div>
    );
}

export default PostAdd;