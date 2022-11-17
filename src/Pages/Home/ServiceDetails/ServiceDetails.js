import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState({});

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const servicesData = data.find(servicesData => servicesData.id == serviceId)
                setServiceDetails(servicesData)
            })
    }, [])
    return (
        <div className='m-4 p-5'>
            <img src={serviceDetails.img} alt="" />
            <h4 className='text-success m-2'>{serviceDetails.name}</h4>
        </div>
    );
};

export default ServiceDetails;