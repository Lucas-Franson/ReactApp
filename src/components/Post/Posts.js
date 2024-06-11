import { useEffect, useState } from 'react';
import Post from './Post';
import { getPosts } from './PostService';
 
const Posts = (props) => {

    const [posts, setPosts] = useState([
        { id: 1, title: 'Title 1', author: 'Author 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        { id: 2, title: 'Title 2', author: 'Author 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        { id: 3, title: 'Title 3', author: 'Author 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
    ]);

    const postOnClickHandler = (id) => {
        props.setPostId(id);
    }

    useEffect(() => {
        getPosts().then(async data => {
            const posts = await data.json();
            setPosts(posts);
        }).catch(err => {
            console.log(err);
        });
    }, [props.fetchPosts]);

    const postList = posts.map(post => {
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