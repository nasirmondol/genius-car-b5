import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import useServiceDetails from '../hooks/useServiceDetails';
import axios from 'axios'
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId)
    const [user] = useAuthState(auth);
    console.log(user)

    const handleOrderPlace = event => {
        event.preventDefault()
        const orders = {
            email: user.email,
            address: event.target.address.value,
            phone: event.target.number.value,
            serviceId: serviceId,
        }

        axios.post('https://infinite-depths-07817.herokuapp.com/order', orders)
        .then(response => {
            const {data} = response
            if(data.insertedId){
                toast('Your order is booked!!')
                event.target.reset()
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please booking: {service?.name}</h2>
            <form onSubmit={handleOrderPlace} className='w-100'>
                <input className='w-100 mb-3' type="text" value={user.displayName} name="name" placeholder='name' required readOnly />
                <br />
                <input className='w-100 mb-3' type="text" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' type="text" value={service?.name} name="service" placeholder='service' required />
                <br />
                <input className='w-100 mb-3' type="text" name="address" autoComplete='off' placeholder='address' required />
                <br />
                <input className='w-100 mb-3' type="number" value={user.phone} name="number" placeholder='phone number' autoComplete='off' required />
                <br />
                <input className='btn btn-primary mb-3' type="submit" value="Please Order" />
            </form>
        </div>
    );
};

export default CheckOut;