import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as creators from '../../state/actionCreators';
import AxiosAuth from '../../axios/AxiosAuth';

const initalSplit = ''
const patchURL = 'https://split-the-bill-api.herokuapp.com/api/splits'

export function SplitsPage (props) {
    const {getSplits, splits} = props;
    const [editing, setEditing] = useState(false);
    const [splitToSettle, setSplitToSettle] = useState(initalSplit)

    const settle = (formValues, actions) => {
        const payload = {amount: formValues.amount}

        AxiosAuth().patch(`${patchURL}/${splitToSettle}/settleUp?au&=`, payload)
            .then(res => {
                console.log(res.data.message)
                setEditing(false);
                getSplits();
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const settleUp = (id) => {
        setEditing(true);
        setSplitToSettle(id)
    }

    useEffect(() => {
        getSplits();
    }, [getSplits]);

    const styles2 = {
        margin: '5px',
        width: '200px',
        height: '50px',
        borderRadius: '10px',
      };

    return (
        <div>
            <ul>
                {
                    splits.map(split => (
                        <Splits key={split.id} split={split} settleUp={settleUp}/>
                    ))
                }
            </ul>
                {
                    editing && (
                        <Formik
                        initialValues={{amount: ''}}
                        onSubmit={settle}
                        render={() => (
                            <Form>
                              <div>
                                <Field style={styles2} name='amount' type="text" placeholder='Amount' />
                              </div>
                               <div>
                               <button type='submit'>save</button>
                               <button onClick={() => setEditing(false)}>cancel</button>
                              </div>
                            </Form>
                        )}
                      />
                    )
                }
        </div>
    )
}


function Splits(props) {
    const {split, settleUp} = props;

    return (
        <div>
            <div>{split.bill.title}</div>
            <div>{split.amount}</div>
            <button onClick={() => settleUp(split.id)}>Settle</button>
        </div>
    )
}

export default connect(
    state => state,
    creators,
)(SplitsPage);