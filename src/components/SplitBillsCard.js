import React, { useState } from 'react';
import AxiosAuth from '../axios/AxiosAuth';
import UserComponent from './UsersComponent';

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
            <div>
                <p>{feature.title}</p>
                <p>{feature.amount}</p>
                <p>{feature.status}</p>
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
            </div>
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

