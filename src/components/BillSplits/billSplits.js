import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../../state/actionCreators';
import AxiosAuth from '../../axios/AxiosAuth';
import swal from '@sweetalert/with-react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 1.5em;
    background-color: #FFB884;
    box-shadow: 0 16px 16px 0 rgba(0,0,0,0.2);`

const Button = styled.button`
    color: white;
    background-color: #75C22F;
    text-transform: uppercase;
    margin: 1.5em;
    text-align: center;
    font-size: 1em;
    font-family: system-ui, sans-serif;
    border-radius: 0.3em;
    padding: 0.5em;
    text-decoration: none;
    border: 0;

    &:hover{
        background:#B73119 ;
        color: white;
    }
`

const approveURL = 'https://split-the-bill-api.herokuapp.com/api/splits'

export function BillSplits(props) {
    const {billSplits, getBills} = props;
    const approve = (id) => {
        AxiosAuth().patch(`${approveURL}/${id}/approve`)
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    swal({
                    title: 'Good!',
                    icon: 'success',
                    text: 'Bill confirmed successfully',
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
        <ParentDiv>
            {
            currentBillSplits.map(billSplit => 
            <Split key={billSplit.id} split={billSplit} approve={approve}/>)
            }
        </ParentDiv>
    );
}


function Split(props){
    const {split, approve} = props;

    return (
        <Card>
            <div style={{ color: 'red' }}>Status: {split.status}</div>
            <div>Amount: {split.amount}</div>
            <Button onClick={() => approve(split.id)}>Confirm</Button>
        </Card>
    )
}

const mapStateToProps = state => ({
    billSplits: state.lumpState.currentUser.bills
})

export default connect (
    mapStateToProps,
    actionCreators
) (withRouter(BillSplits))

const ParentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`
