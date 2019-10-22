import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as creators from '../../state/actionCreators';

export function SplitsPage (props) {
    const {getSplits, splits} = props;

    useEffect(() => {
        getSplits();
    }, []);

    return (
        <div>
            {
                splits.map(split => (
                    <Splits split={split}/>
                ))
            }
        </div>
    )
}


function Splits(props) {
    const {split} = props;

    return (
        <div>
            <div>{split.bill.title}</div>
            <div>{split.amount}</div>
            {/* <button onClick={() => settleUp(amount)}>Settle</button> */}
        </div>
    )
}

export default connect(
    state => state,
    creators,
)(SplitsPage);