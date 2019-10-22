import React from 'react';

import { Checkbox, Card } from "@material-ui/core";

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
        <Card>
            <h4>{`${user.firstName} ${user.lastName}`}</h4>
            <Checkbox onChange = {onCheckBoxChanged} />
        </Card>
    )
}