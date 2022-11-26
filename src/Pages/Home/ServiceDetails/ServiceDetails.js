import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState({});

    useEffect(() => {
       const url = `http://localhost:5000/service/${serviceId}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setServiceDetails(data))
           
    }, [serviceId])
    return (
        <div className='justify-content-center p-5'>
            <img src={serviceDetails.img} alt="" />
            <h4 className='text-success m-2'>{serviceDetails.name}</h4>
            <Button className='bg-primary'><Link className='text-light' style={{'textDecoration': 'none'}} to={`/checkout/${serviceId}`}>Proceed checkout</Link></Button>
        </div>
    );
};

export default ServiceDetails;
