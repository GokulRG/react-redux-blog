import React from 'react';

//Mostly we won't save any state or modify anything much in the app component
//we try to handle all state transitions and what not in the individual component
//itself, so making this a functional component isn't a bad idea.

const App = () => {
    //This ui container is the style we apply by default on importing Semantic UI on to the App container.
    return <div className="ui container">App</div>
};

export default App;