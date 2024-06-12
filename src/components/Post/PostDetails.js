import { useContext, useEffect, useMemo, useState } from 'react';
import './Post.css';
import { getPostsById, deletePost } from './PostService';
import { PostContext } from '../../context/PostContext';
import Comment from '../Comment/Comment';

const PostDetails = (props) => {

    const [post, setPost] = useState(null);

    const id = useContext(PostContext);

    useEffect(() => {
        getPostsById(id).then(async data => {
            const post = await data.json();
            setPost(post);
        }).catch(err => {
            console.log(err);
        });
    }, [id]);

    const comments = useMemo(() => {
        return post?.comments?.map(comment => {
            return (
                <Comment key={comment.id} name={comment.name} />
            );
        });
    }, [post?.comments]);

    const deletePostHandler = () => {
        deletePost(id).then(() => {
            setPost(null);
            props.setId(null);
            props.fetchPostsFlag();
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className='post-details'>
            {post && (
                <div>

                    <div className='post-info'>
                        <h1>{post.title}</h1>
                        <h3>{post.author}</h3>
                        <p>{post.content}</p>
                    </div>
                    <div className='post-comments'>
                        {post.comments && post.comments.length > 0 && (
                            <div>
                                <h3>Comments:</h3>
                                {comments}
                            </div>
                            )}
                    </div>
                    <div className='post-btn'>
                        <button>Edit</button>
                        <button onClick={deletePostHandler}>Delete</button>
                    </div>

                </div>
            )}
        </div>
    );
}

export default PostDetails;