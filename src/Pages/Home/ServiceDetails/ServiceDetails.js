import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div className='m-4 p-5'>
            <img src={serviceDetails.img} alt="" />
            <h4 className='text-success m-2'>{serviceDetails.name}</h4>
        </div>
    );
};

export default ServiceDetails;

// fetch(url, {
//     .then(res => res.json())
//     .then(data => {
//         const servicesData = data.find(servicesData => servicesData.id == serviceId)
//         setServiceDetails(servicesData)
//     })
// })