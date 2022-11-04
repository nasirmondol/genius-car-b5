import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [serviceDetails, setServiceDetails] = useState({});

    useEffect(() =>{
        const url = `http://localhost:3000/serviceDetails/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    }, [])
    return (
        <div>
            <h2>Our service details is here: {serviceId}</h2>
            <img src={serviceDetails.img} alt="" />
           <p>{serviceDetails.name}</p>
        </div>
    );
};

export default ServiceDetails;