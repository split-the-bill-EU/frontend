import React from 'react';
import {Formik, Form, Field,} from 'formik';
import * as yup from 'yup';
// import styled from 'styled-components';

const validationSchema = yup.object().shape({
    email: yup.string()
        .email('email not valid')
        .required('A name input is required'),
    password: yup.string()
        .required('a password is required'),
});

const Login = (props) => {
    const onLogin = ({ username, password }) => {
        return props.onLogin({ username, password });
        };

    return (
    <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onLogin}
        validationSchema={validationSchema}
        render={(props) => (
        <Form className='login'>
            <Field name='email' type="text" placeholder='Email' />
            <Field name='password' type="text" placeholder='Password' />
            <input type='submit' />
        </Form>
        )}
    />
    );
}

export default Login;