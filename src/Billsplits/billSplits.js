import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import AxiosAuth from '../axios/AxiosAuth';



const approveURL = 'https://split-the-bill-api.herokuapp.com/api/splits'

export function BillSplits (props) {
    const {billSplits, getBills} = props;


    const approve = (id) => {

        AxiosAuth().patch(`${approveURL}/${id}/approve`)
            .then(res => {
                debugger
                console.log(res.data)
            })
            .catch(err => {
                debugger
                console.log(err.message)
            })
    }

    useEffect(() => {
        console.log(props.match.params.billId);
    }, [props.match.params.billId])

    useEffect(() => {
        getBills() 
    }, [getBills]);

    console.log(billSplits);
    const currentId = props.match.params.billId;
    const currentbill = billSplits.find(({id}) => id === currentId);
    console.log(currentbill);
    const currentBillSplits = currentbill.splits;
    console.log(currentBillSplits);

    return (
        <div>
            {
            currentBillSplits.map(billSplit => 
            <Split split={billSplit} approve={approve}/>)
            }
        </div>
    );
}


function Split(props){
    const {split, approve} = props;

    return (
        <div>
            <div>{split.status}</div>
            <div>{split.amount}</div>
            <button onClick={() => approve(split.id)}>Confirm</button>
        </div>
    )
}

const mapStateToProps = state => ({
    billSplits: state.lumpState.currentUser.bills
})

export default connect (
    mapStateToProps,
    actionCreators
) (BillSplits)