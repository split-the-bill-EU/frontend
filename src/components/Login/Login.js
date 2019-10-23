import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';

const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    justify-content: center;
    align-content: center;
`

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
    transition: 0.3s;
`

const StyledInnerDiv = styled.div`
    padding: 1em;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Styledfont = styled.h3`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.0em;
    margin: 0.2em;
`

const Surround = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
`

const FontDiv = styled.div`
    display: flex;
    height: 10%;
    justify-content: center;
`

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
    cursor: pointer;
`




const validationSchema = yup.object().shape({
    email: yup.string()
        .email('email not valid')
        .required('An email is required'),
    password: yup.string()
        .required('a password is required'),
});

const loginURL = 'https://split-the-bill-api.herokuapp.com/api/auth/login';

const Login = (props) => {


    const onLogin = (formValues, actions) => {
        const details = {
            email: formValues.email,
            password: formValues.password
        }



        axios.post(loginURL, details)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                actions.resetForm();
                props.history.push('/dashboard')
            })
            .catch(error => {
                localStorage.clear();
                alert(error.response.data.message);
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

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={onLogin}
            validationSchema={validationSchema}
            render={(props) => (
                <OuterDiv>
                    <InnerDiv>
                        <FontDiv>
                            <Styledfont>Please log in!</Styledfont>
                        </FontDiv>
                        <Surround>
                            <Form className='login'>



                                <StyledInnerDiv>
                                    <Field style={styles2} name='email' type="text" placeholder='Email' />
                                    <ErrorMessage name='email' component='div'/>
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <Field style={styles2} name='password' type="password" placeholder='Password' />
                                    <ErrorMessage name='password' component='div'/>
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <Button type='submit'>Sign In</Button>
                                </StyledInnerDiv>

                            </Form>
                        </Surround>

                    </InnerDiv>
                </OuterDiv>
            )}
        />
    );
}

export default Login;