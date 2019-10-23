import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import AxiosAuth from '../axios/AxiosAuth';
import swal from '@sweetalert/with-react';



const approveURL = 'https://split-the-bill-api.herokuapp.com/api/splits'

export function BillSplits (props) {
    const {billSplits, getBills} = props;


    const approve = (id) => {

        AxiosAuth().patch(`${approveURL}/${id}/approve`)
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    swal({
                    title: 'Good!',
                    icon: 'success',
                    text: 'Bill splitted successfully',
                    button: 'OK',                 
                    });
                }
                props.history.push('/dashboard')
            })
            .catch(err => {
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
            <div style={{ color: 'red' }}>Status: {split.status}</div>
            <div>Amount: {split.amount}</div>
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