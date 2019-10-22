import React, {useEffect, useState} from "react"
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import SplitBillsCard from './SplitBillsCard'
import styled from "styled-components";

export const SplitBills = (props) => {
    // console.log(props)
    const {lumpState, getUserDetails, getUsers} = props;

    const [owingUsers, setOwingUsers] = useState([])
    useEffect(() => {
        getUserDetails();
        getUsers();
    }, [])
    return(
        <StyledDiv>
            {
                lumpState.currentUser.bills.map(bill => <SplitBillsCard key={bill.id} setOwingUsers = {setOwingUsers} feature={bill} owingUsers={owingUsers}/>)
            }
        </StyledDiv>
    )
}

export default connect(
    state => state, 
    actionCreators
)(SplitBills)

const StyledDiv =  styled.div`
    display: flex;

    >div {
        width: 30%;
    }
`