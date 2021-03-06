import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

//We have to mark this as async because the payload will be retrieved after an await call to the json placeholder api
// export const fetchPosts = async () => {

//     //BAD APPROACH!!! Because we're breaking the rules of redux
//     const response = await jsonPlaceholder.get('/posts');

//     return {
//         type: 'FETCH_POSTS',
//         payload: response.data
//     };
// };

//This dispatch and getState functions are part of the redux-thunk library
export const fetchPosts = () => {

    //We don't use the getState parameter so we can remove that
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        //Because we only care about response.data
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    };
};

export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
});