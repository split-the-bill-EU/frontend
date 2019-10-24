import React from 'react';
import { connect } from 'react-router-dom';

export const UserOnSplits = () => {
    return (
        <div>Users on Splits</div>
    )
}

export default connect(state => state)(UserOnSplits);