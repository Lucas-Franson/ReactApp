import './Post.css';


const PostDetails = (post) => {
    return (
        <div className='post-details'>
            <div className='post-info'>
                <h1>{post.title}</h1>
                <h3>{post.author}</h3>
                <p>{post.content}</p>
            </div>
            <div className='post-btn'>
                <button>Edit</button>
                <button onClick={() => post.delete(post.id)}>Delete</button>
            </div>
        </div>
    );
}

export default PostDetails;