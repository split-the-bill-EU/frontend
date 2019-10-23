import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import UserCard from './UserCard';

export function UserComponent (props) {
    return (
        <div>
            {
                props.lumpState.users.map(user => <UserCard key ={user.id} setOwingUsers = {props.setOwingUsers} user={user} owingUsers={props.owingUsers}/>)
            }
        </div>
    );
}

export default connect (
    state => state,
    actionCreators
) (UserComponent)