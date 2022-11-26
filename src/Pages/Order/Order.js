import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://infinite-depths-07817.herokuapp.com/order?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url)
                setOrders(data)
            }
            catch (error) {
                console.log(error.message)
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders()

    }, [user])
    return (
        <div className='w-50 mx-auto m-3 p-3'>
            <h2>Your order: {orders.length}</h2>
            {
                orders.map(order => <div key={order._id}>
                    <p>{order.email}</p>
                    <h5>{order.address}</h5>
                </div>)
            }
        </div>
    );
};

export default Order;

// try {
//     fetch(url, {
//         headers: {
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     })
//         .then(res => res.json())
//         .then(data => setOrders(data))
// }
// catch (error) {
//     console.log(error)
// }