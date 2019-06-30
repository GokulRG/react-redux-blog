import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.users.find(user => user.id === this.props.userId);

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
const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);