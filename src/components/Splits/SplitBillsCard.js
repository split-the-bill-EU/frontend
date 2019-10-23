import React, { useState } from 'react';
import AxiosAuth from '../../axios/AxiosAuth';
import UserComponent from '../UsersComponent';
import styled from "styled-components";

import {  Card } from "@material-ui/core";


const split = (id) => {
    AxiosAuth().post(`https://split-the-bill-api.herokuapp.com/api/bills/${id}/split`, {
        // splitters: 
    })
        .then(res => {
            console.log('split', res.data);

        })
}

export default function SplitBillsCard({ feature, setOwingUsers, owingUsers }) {
    const [isSplitting, setSplitting] = useState(false)


    const split = (id) => {
        AxiosAuth().post(`https://split-the-bill-api.herokuapp.com/api/bills/${id}/split`, {
            splitters: owingUsers
        })
            .then(res => {
                console.log('split', res.data);
                setSplitting(false)
            })
    }
    const toggle = () => setSplitting(!isSplitting)
    return (
        <div>
            <StyledCard>
                <p>{feature.title}</p>
                <p style={{"color": "red"}}>Amount: {feature.amount}</p>
                <p>status: {feature.status}</p>
                <button onClick={ () => {
                    toggle()
                    setOwingUsers([])
                } }>{isSplitting ? 'Cancel' : 'Split'}</button>
                { 
                    isSplitting ? 
                    <button onClick={() => split(feature.id)}>Done</button>
                    :
                    <></>
                }
            </StyledCard>
            <div>
                {
                    isSplitting ?
                     <UserComponent setOwingUsers= {setOwingUsers} owingUsers={owingUsers} /> :
                      <></>
                }
            </div>
        </div>
    );
}

const StyledCard = styled(Card)`
    margin: .2rem;
`