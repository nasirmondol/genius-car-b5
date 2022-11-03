import React from 'react';
import expert1 from '../../../images/expert-1.jpg'
import expert2 from '../../../images/expert-2.jpg'
import expert3 from '../../../images/expert-3.jpg'
import expert4 from '../../../images/expert-4.jpg'
import expert5 from '../../../images/expert-5.jpg'
import expert6 from '../../../images/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Willium Thumson', img: expert1 },
    { id: 2, name: 'Bulger Dimay', img: expert2 },
    { id: 3, name: 'Harvey Kisley', img: expert3 },
    { id: 4, name: 'Mounter Roads', img: expert4 },
    { id: 5, name: 'Stifen Jokis', img: expert5 },
    { id: 6, name: 'Try Endey', img: expert6 },
]

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center'>Our expert team</h2>
            <div className='row' >
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;