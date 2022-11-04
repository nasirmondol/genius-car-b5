import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate()
    const { id, name, img, description, price } = service;

    const navigateToDetails= id =>{
        navigate(`/serviceDetails/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToDetails(id)}>{name}</button>
        </div>
    );
};

export default Service;