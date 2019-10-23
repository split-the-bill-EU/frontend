import React, { useState } from 'react';
import AxiosAuth from '../../../axios/AxiosAuth';
import UserComponent from '../../UserComponent';
import styled from 'styled-components';
import swal from '@sweetalert/with-react';
import { Card } from '@material-ui/core';

export default function SplitBillsCard({ bill, setOwingUsers, owingUsers }) {
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
        <p>{bill.title}</p>
        <p style={{ color: 'red' }}>Amount: {bill.amount}</p>
        <p>status: {bill.status}</p>
        {bill.splits.length ? (
          <button>View Splits</button>
        ) : (
          <button
            onClick={() => {
              toggle();
              setOwingUsers([]);
            }}
          >
            {isSplitting ? 'Cancel' : 'Split'}
          </button>
        )}
        {isSplitting ? (
          <button onClick={() => split(bill.id)}>Done</button>
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