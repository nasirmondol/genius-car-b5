import { useEffect, useState } from "react";

const useServiceDetails = serviceId =>{
    const [service, setServiceDetail] = useState();
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setServiceDetail(data))
            
     }, [serviceId])

     return [service, setServiceDetail]
}

export default useServiceDetails;