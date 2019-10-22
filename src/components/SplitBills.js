import React, {useEffect} from "react"
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import SplitBillsCard from './SplitBillsCard'

export const SplitBills = (props) => {
    console.log(props)
    const {lumpState, getUserDetails, getUsers} = props;
    useEffect(() => {
        getUserDetails();
        getUsers();
    }, [])
    return(
        <div>
            {
                lumpState.currentUser.bills.map(bill => <SplitBillsCard key={bill.id} feature={bill}/>)
            }
        </div>
    )
}

export default connect(
    state => state, 
    actionCreators
)(SplitBills)