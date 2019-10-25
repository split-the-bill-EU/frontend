import React from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import AxiosAuth from '../../axios/AxiosAuth';

const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    justify-content: center;
    align-content: center;`

const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #FFB884;
    border-radius: 1em;
    justify-content: space-evenly;
    width: 50%;
    height: 70%;
    align-self: center;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transition: 0.3s;`

const StyledInnerDiv = styled.div`
    padding: 1em;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;`

const Styledfont = styled.h3`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.0em;
    margin: 0.2em;`

const Surround = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;`

const FontDiv = styled.div`
    display: flex;
    height: 10%;
    justify-content: center;`

const Button = styled.button`
    color: white;
    background-color: #75C22F;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.3em;
    font-family: system-ui, sans-serif;
    border-radius: 0.3em;
    padding: 0.5em;
    text-decoration: none;
    border: 0;
    cursor: pointer;`






const createBillURL = 'https://split-the-bill-api.herokuapp.com/api/bills';

export const CreateBill = (props) => {

    const createBill = (formValues, actions) => {
        const details = {
            amount: formValues.amount,
            title: formValues.title
        }


        AxiosAuth()
            .post(createBillURL, details)
            .then(res => {
                actions.resetForm();
                alert(res.statusText);
                props.history.push('/my_bills')
            })
            .catch(error => {
                localStorage.clear();
                alert(error.message);
            });
    };

    const styles2 = {
        margin: '0.5em',
        width: '20em',
        height: '1.8em',
        borderRadius: '0.2em',
        fontSize: '1em',
        textAlign: 'center',
        border: '0',
    };

    const validationSchema = yup.object().shape({
        title: yup.string()
            .required('A title is required'),
        amount: yup.string()
            .required('an amount is required'),
    });

    const initialValues = {
        amount: '',
        title: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={createBill}
            validationSchema={validationSchema}
            render={(props) => (
                <OuterDiv>
                    <InnerDiv>
                        <FontDiv>
                            <Styledfont>Create a bill</Styledfont>
                        </FontDiv>
                        <Surround>
                            <Form className='createbill'>



                                <StyledInnerDiv>
                                    <Field style={styles2} name='title' type="text" placeholder='Title' />
                                    <ErrorMessage name='title' component='div' />
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <Field style={styles2} name='amount' type="text" placeholder='Total Amount' />
                                    <ErrorMessage name='amount' component='div' />
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <Button type='submit'>Save</Button>
                                </StyledInnerDiv>

                            </Form>
                        </Surround>

                    </InnerDiv>
                </OuterDiv>
            )}
        />
    );
}

export default withRouter(CreateBill);