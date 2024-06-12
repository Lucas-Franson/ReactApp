import { useState } from 'react';
import './Dashboard.css';
import Posts from '../Post/Posts';
import PostDetails from '../Post/PostDetails';
import PostAdd from '../Post/PostAdd';
import { PostContext } from '../../context/PostContext';

const Dashboard = () => {

    const [postId, setPostId] = useState(null);
    const [fetchPosts, setFetchPosts] = useState(true);

    const fetchPostsFlag = () => {
        setFetchPosts(!fetchPosts);
    }
    
    return (
        <div className='dashboard'>
            <PostContext.Provider value={postId}>
                <div className='posts'>
                    <Posts setPostId={setPostId} fetchPosts={fetchPosts} />
                </div>

                {postId && 
                    <PostDetails setId={setPostId} fetchPostsFlag={fetchPostsFlag} />}
            </PostContext.Provider>

            <div className='form'>
                <input type='text' placeholder='Title' />
                <input type='submit' value='Change Name' />
            </div>

            <PostAdd fetchPostsFlag={fetchPostsFlag} />
        </div>
    );
}

export default Dashboard;