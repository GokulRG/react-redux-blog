import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                PostList
            </div>
        );
    }
};

//The first argument is null for now because we don't have the mapStateToProps fn.
//The second argument is fetchPosts which is our action creator. We can also write it in
//ES2015 syntax as {fetchPosts}. This fetch posts will already go as a prop to this component
export default connect(null, { fetchPosts: fetchPosts })(PostList);