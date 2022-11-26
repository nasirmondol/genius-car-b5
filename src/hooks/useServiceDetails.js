import { useEffect, useState } from "react";

const useServiceDetails = serviceId =>{
    const [service, setServiceDetail] = useState();
    useEffect(() => {
        const url = `https://infinite-depths-07817.herokuapp.com/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setServiceDetail(data))
            
     }, [serviceId])

     return [service, setServiceDetail]
}

export default useServiceDetails;