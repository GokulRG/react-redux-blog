import { combineReducers } from 'redux';

export default combineReducers({
    //We need a dummy reducer here so that we don't face errors while running our project.
    //This will be replaced later once we have an idea of how to implement valid reducers
    //for our needs.
    dummyReducer: () => 'This is a dummy reducer'
});