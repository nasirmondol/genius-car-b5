import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation();
    const from = location.state?.from?.pathname || ('/')

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            toast('email sent')
        }
        
        else{
            toast('please enter your email address')
        }
    }

    let errorElement;

    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>
    }

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }


    const handleSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }



    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary mt-2 text-center'>Login page</h2>
            <PageTitle title="Login"></PageTitle>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>{errorElement}</p>
                <Button className='w-50 mx-auto d-block mb-2' variant="primary" type="submit">
                    Login
                </Button>
                <p>New to genius car? <Link className='text-primary text-decoration-none' to='/register'>Please register</Link></p>
                <p>Forgot password? <Link onClick={handleResetPassword} className='text-primary text-decoration-none'>Reset Password</Link></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Login;