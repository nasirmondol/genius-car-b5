import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [agree, setAgree] = useState(false);
    
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    if(loading || updating){
        return <Loading></Loading>
    }

    if(user){
        console.log('user', user)
    }


    const handleName = event =>{
        setName(event.target.value)
    }

    const handleEmail = event =>{
        setEmail(event.target.value)
    }
    const handlePassword = event =>{
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('updated user')
        navigate('/home');
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className="text-primary text-center mt-2">Please register</h2>
            <PageTitle title="Register"></PageTitle>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control onBlur={handleName} type="name" placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'text-primary ps-2' : 'text-danger ps-2'} htmlFor="terms">Accept Genius Car Terms And Condition</label>
               
                <Button disabled={!agree} className="w-50 mx-auto d-block mt-2" variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already register? <Link className='text-warning text-decoration-none' to='/login'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;