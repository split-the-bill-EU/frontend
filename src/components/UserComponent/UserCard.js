import React from 'react';

import { Checkbox, Card } from "@material-ui/core";
import styled from "styled-components";

export default (props) => {
    const {user, setOwingUsers, owingUsers} = props;

   const onCheckBoxChanged = e => {
        // console.log(user.id, e.target.checked);
        setOwingUsers(user.id)

        e.target.checked ?
        onAddUser(user.id) :
        onRemoveUser(user.id)
   }

   const onAddUser = (user) => {
       const newUsers = [
        ...owingUsers, user
    ]
    console.log('add', user, newUsers)
    setOwingUsers(newUsers)
   }
    
   const onRemoveUser = (userId) => {
    const remainingUsers = owingUsers.filter(id => id !== userId )
    console.log('remove', userId, remainingUsers)
    setOwingUsers(remainingUsers)
   }

    return(
        <StyledCard>
            <h4>{`${user.firstName} ${user.lastName}`}</h4>
            <Checkbox onChange = {onCheckBoxChanged} />
        </StyledCard>
    )
}

const StyledCard = styled(Card)`
    display: flex;
    justify-content: space-evenly;
    margin-top: .4rem;
`