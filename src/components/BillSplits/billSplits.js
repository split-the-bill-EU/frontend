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
    justify-content: space-around;
    width: 20%;
    margin: 1.5em;
    background-color: #070F11;
    color: white;
    box-shadow: 0 16px 16px 0 rgba(0,0,0,0.2);`

const Canvas = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: whitesmoke;`

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
    cursor: pointer;`



const approveURL = 'https://split-the-bill-api.herokuapp.com/api/splits'

export function BillSplits(props) {
    const {billSplits, getBills} = props;


    const approve = (id) => {

        AxiosAuth().patch(`${approveURL}/${id}/approve`)
            .then(res => {
                if (res.data) {
                    swal({
                    title: 'Good!',
                    icon: 'success',
                    text: 'Bill confirmed successfully',
                    button: 'OK',                 
                    });
                }
                // props.history.push(`/my_billsplits/${props.match.params.billId}`)
                getBills();
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    useEffect(() => {
    }, [props.match.params.billId])

    useEffect(() => {
        getBills() 
    }, [getBills]);

    const currentId = props.match.params.billId;
    const currentbill = billSplits.find(({id}) => id === currentId);
    const currentBillSplits = currentbill.splits;
    return (
        <Canvas>
            {
            currentBillSplits.map(billSplit => 
            <Split key={billSplit.id} split={billSplit} approve={approve}/>)
            }
        </Canvas>
    );
}


function Split(props){
    const {split, approve} = props;

    return (
        <Card>
            <h2 style={{ color: 'red' }}>Status: {split.status}</h2>
            <div>Amount: {split.amount}</div>
            { split.status === 'pending' ?
            (<Button onClick={() => approve(split.id)}>Confirm</Button>) :
            (<div style={{ color: 'white', 
                            backgroundColor: '#555555',
                            // width: '90%',
                            margin: '1.5em',
                            fontSize: '1em',
                            padding: '0.5em',
                            borderRadius: '0.3em'}}> CONFIRMED</div>)
            }
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