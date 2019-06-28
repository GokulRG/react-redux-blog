// export const fetchPosts = (state = [], action) => {
//     if (action.type === 'FETCH_POSTS') {
//         return action.payload;
//     }
//     return state;
// }


//Instead of the above if condition inside reducers, you'll most commonly come across the switch syntax.
// so it's good to write our reducers and practice with that syntax.

//As we know any reducer takes 2 arguments, one is the state and the other is the action.
//The default value of state will always depend on what value we're looking to store in it.
//for saving a list of blog posts, array is a valid choice. So based on the usage and use case
// you could very well have a null, {} or 0 as your default value for state.
export const fetchPosts = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            //If your action's type is not the type that this reducer cares about, just return the previous state.
            //Because you never return undefined.
            return state;
    }
}