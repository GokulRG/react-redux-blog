import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {

        const { user } = this.props;

        if (!user) {
            return <div />
        };

        return (
            <div style={{marginTop:'10px'}} className="header">{user.name}</div>
        );
    }
}

//This will always be outside the component, This will be written when the 
//application needs to access the redux state. So it will take an argument of state
const mapStateToProps = (state, ownProps) => {

    //Since we don't want the entire list of users here.. just pass in the user
    //we would need

    //But how would we get props here.. since it's outside the class
    // That's why we pass in an argument called ownProps, That's a reference to the
    //props of the component
    const user = state.users.find(user => user.id === ownProps.userId);

    return {
        user: user
    };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);