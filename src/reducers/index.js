import { combineReducers } from 'redux';
import { fetchPosts } from './fetchPosts';
import { usersReducer } from './usersReducer';

//Here we don't write all the reducers in the index.js file because on a larger application
//that would not scale well.

export default combineReducers({
    posts: fetchPosts,
    users: usersReducer
});