import { FETCH_POSTS, NEW_POST } from './types';
//分发操作
// export function fetchPosts() {
//     // console.log(123);
//     return function(dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => {
//             dispatch({
//                 type: FETCH_POSTS,
//                 payload: posts
//             })
//         })
//     }
// }
export const fetchPosts = () => dispatch => {
    // console.log(123);
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    })
}

export const createPost = postData => dispatch => {
    console.log('createPost');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => {
        dispatch({
            type: NEW_POST,
            payload: post
        })
    })
}