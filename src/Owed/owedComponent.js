import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function UserComponent (props) {
    const {billSplits} = props;

    return (
        <div>
            {
            billSplits.map(billSplit => 
            <Split split={billSplits}/>)
            }
        </div>
    );
}


function Split(props){
    const {split} = props;

    return (
        <div>
            <div>{split.status}</div>
            <div>{split.amount}</div>
            <button>Confirm</button>
        </div>
    )
}

export default connect (
    state => state,
    actionCreators
) (UserComponent)