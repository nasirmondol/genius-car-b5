import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Service.css'

const Service = ({ service }) => {
    <PageTitle title="Service"></PageTitle>
    const navigate = useNavigate()
    const { _id, name, img, description, price } = service;

    const navigateToDetails = id => {
        navigate(`/serviceDetails/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3 className='m-2'>{name}</h3>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary m-2' onClick={() => navigateToDetails(_id)}>Book: {name}</button>
        </div>
    );
};

export default Service;