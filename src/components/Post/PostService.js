
const API = 'http://localhost:8080/api/v1/posts';

export const getPosts = async () => {
    return fetch(API);
}

export const getPostsById = async (id) => {
    return fetch(`${API}/${id}`);
}

export const deletePost = async (id) => {
    return fetch(`${API}/${id}`, {
        method: 'DELETE'
    });
}

export const addPost = async (post) => {
    return fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
}