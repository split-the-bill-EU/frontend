import React, { useState } from 'react';
import AxiosAuth from '../../../axios/AxiosAuth';
import UserComponent from '../../UserComponent';
import styled from 'styled-components';
import swal from '@sweetalert/with-react';
import {NavLink} from 'react-router-dom'

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
    <Canvas>
      <StyledCard>
        <h2>{bill.title}</h2>
        <h3 style={{ color: '#91BF26' }}>Amount: {bill.amount}</h3>
        <p>status: {bill.status}</p>
        {bill.splits.length ? (
          <NavLink to={`/my_billsplits/${bill.id}`}
                  
          ><StyledButton>View Splits</StyledButton></NavLink>
        ) :
        <ParentDiv>
           
          <StyledButton
            onClick={() => {
              toggle();
              setOwingUsers([]);
            }}
          >
            {isSplitting ? 'Cancel' : 'Split'}
          </StyledButton>
        
        {isSplitting ? (
          <StyledButton onClick={() => split(bill.id)}>Done</StyledButton>
        ) : (
          <></>
        )}
        </ParentDiv>
        }
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
    </Canvas>
  );
}

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 0 .5rem;
    margin-bottom: .5rem;
  }
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    margin: 1.5em;
    color: white;
    background-color: #070F11;
    box-shadow: 0 16px 16px 0 rgba(0,0,0,0.2);`

const StyledButton = styled.button`
    color: white;
    background-color: #75C22F;
    text-transform: uppercase;
    text-align: center;
    font-size: 1em;
    font-family: system-ui, sans-serif;
    border-radius: 0.3em;
    padding: 0.5em;
    text-decoration: none;
    border: 0;
    margin-bottom: .5rem;

    &:hover{
        background:#555555 ;
        color: white;
    }`

const Canvas = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;`