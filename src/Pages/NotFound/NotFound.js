import React from 'react';
import logo from '../../../src/images/NotFound/error-page-not-found-vector-27898543.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>This page is not found</h1>
            <img className='text-center' src={logo} alt="" />
        </div>
    );
};

export default NotFound;