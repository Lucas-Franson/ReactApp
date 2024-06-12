import React, { useRef } from 'react';
import './Post.css';
import { addPost } from './PostService';
 
const PostAdd = (props) => {

    const postForm = useRef(null);

    const save = () => {
        const form = postForm.current;
        const data = {
            title: form.title.value,
            author: form.author.value,
            content: form.content.value
        }

        addPost(data).then(() => {
            props.fetchPostsFlag();
        }).catch(err => {
            console.log(err);
        });
    }
 
    return (
        <div className='post-add'>
            <form ref={postForm} className='post-form'>
                <label for="title">Title</label>
                <input type="text" id="title" name="title" />

                <label for="author">Author</label>
                <input type="text" id="author" name="author" />

                <label for="content">Content</label>
                <textarea id="content" name="content"></textarea>
            </form>
            <div className='post-form-btn'>
                <button onClick={save}>Add</button>
            </div>
        </div>
    );
}

export default PostAdd;