import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../../../images/social/google.png'
import facebook from '../../../../images/social/Facebook.png'
import github from '../../../../images/social/GitHub.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import useToken from '../../../../hooks/useToken';


const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1)
    const location = useLocation();
    const from = location.state?.from?.pathname || ('/')

    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <div>
            <p className="text-danger">Error: {error?.message} {error1?.message}</p>
        </div>
    }

    if (token) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mt-2 m-3'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            <p>{errorElement}</p>
            <div>

                <Button onClick={() => signInWithGoogle()} className="btn btn-info w-50 d-block mx-auto my-2">
                    <img src={google} alt="" />
                    <span className='px-2'>Google Login</span>
                </Button>
                <Button className="btn btn-warning w-50 d-block mx-auto my-2">
                    <img src={facebook} alt="" />
                    <span className='px-2'>Facebook Login</span>
                </Button>
                <Button onClick={() => signInWithGithub()} className="btn btn-primary w-50 d-block mx-auto">
                    <img src={github} alt="" />
                    <span className='px-2'>Github Login</span>
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;