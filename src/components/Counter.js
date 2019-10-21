import React from 'react';
import { connect } from 'react-redux';
import * as creators from '../state/actionCreators';

export function Counter (props) {


    const { count, increment, decrement, reset} = props;
    return (
        <div>
            The count is {count}
            <br/>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.test,
    }
}

export default connect(mapStateToProps,
    creators,
    )(Counter);