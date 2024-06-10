import { useState } from 'react';
import './Dashboard.css';
import Posts from '../Post/Posts';
import PostDetails from '../Post/PostDetails';

const Dashboard = () => {

    const [posts, setPosts] = useState([
        { id: 1, title: 'Title 1', author: 'Author 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        { id: 2, title: 'Title 2', author: 'Author 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        { id: 3, title: 'Title 3', author: 'Author 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
    ]);

    const [post, setPost] = useState(null);
    
    const deletePostHandler = (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
    }

    return (
        <div className='dashboard'>
            <div className='posts'>
                <Posts setPost={setPost} posts={posts} />
            </div>

            <div className='form'>
                <input type='text' placeholder='Title' />
                <input type='submit' value='Change Name' />
            </div>

            {post && <PostDetails title={post.title} id={post.id} author={post.author} content={post.content} delete={deletePostHandler} /> }
        </div>
    );
}

export default Dashboard;