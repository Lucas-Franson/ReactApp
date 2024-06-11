import { useState } from 'react';
import './Dashboard.css';
import Posts from '../Post/Posts';
import PostDetails from '../Post/PostDetails';
import PostAdd from '../Post/PostAdd';

const Dashboard = () => {

    const [postId, setPostId] = useState(null);
    const [fetchPosts, setFetchPosts] = useState(true);

    const fetchPostsFlag = () => {
        setFetchPosts(!fetchPosts);
    }
    
    return (
        <div className='dashboard'>
            <div className='posts'>
                <Posts setPostId={setPostId} fetchPosts={fetchPosts} />
            </div>

            <div className='form'>
                <input type='text' placeholder='Title' />
                <input type='submit' value='Change Name' />
            </div>

            <PostAdd fetchPostsFlag={fetchPostsFlag} />

            {postId && 
                <PostDetails id={postId} setId={setPostId} fetchPostsFlag={fetchPostsFlag} />}

        </div>
    );
}

export default Dashboard;