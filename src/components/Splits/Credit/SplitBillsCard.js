import React, { useState } from 'react';
<<<<<<< HEAD:src/components/Splits/Credit/SplitBillsCard.js
import AxiosAuth from '../../../axios/AxiosAuth';
import UserComponent from '../../UserComponent';
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
=======
import AxiosAuth from '../../axios/AxiosAuth';
import UserComponent from '../UsersComponent';
import styled from 'styled-components';
import swal from '@sweetalert/with-react';
import { Card } from '@material-ui/core';
>>>>>>> develop:src/components/Splits/SplitBillsCard.js

export default function SplitBillsCard({ feature, setOwingUsers, owingUsers }) {
  const [isSplitting, setSplitting] = useState(false);

  const split = id => {
    AxiosAuth()
      .post(`https://split-the-bill-api.herokuapp.com/api/bills/${id}/split`, {
        splitters: owingUsers,
      })
      .then(res => {
        if (res.data.splits) {
          swal({
            title: 'Good!',
            icon: 'success',
            text: 'Bill splitted successfully',
            button: 'OK',
          });
        }
        setSplitting(false);
      });
  };
  const toggle = () => setSplitting(!isSplitting);
  return (
    <div>
      <StyledCard>
        <p>{feature.title}</p>
        <p style={{ color: 'red' }}>Amount: {feature.amount}</p>
        <p>status: {feature.status}</p>
        <button
          onClick={() => {
            toggle();
            setOwingUsers([]);
          }}
        >
          {isSplitting ? 'Cancel' : 'Split'}
        </button>
        {isSplitting ? (
          <button onClick={() => split(feature.id)}>Done</button>
        ) : (
          <></>
        )}
      </StyledCard>
      <div>
        {isSplitting ? (
          <UserComponent
            setOwingUsers={setOwingUsers}
            owingUsers={owingUsers}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

const StyledCard = styled(Card)`
  margin: 0.2rem;
`;
