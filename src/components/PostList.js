import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
};

//This method is used for bringing data from the redux side to the react side.
//We must also pass this method as the first argument to the connect metohd.
//If you go to the combine reducers method, you'll know what name we call the 
//fetchPosts property as. It's called posts. So our state contains a property 
//called posts. 
const mapStateToProps = (state) => {
    return { posts: state.posts };
}

//The first argument is null for now because we don't have the mapStateToProps fn.
//The second argument is fetchPosts which is our action creator. We can also write it in
//ES2015 syntax as {fetchPosts}. This fetch posts will already go as a prop to this component
export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList);