import React from 'react';

const TestimonialCard = ({ testimonialData }) => {
    const { address, peopleImg, description, peopleName } = testimonialData;
    return (
        <div className="card w-80  bg-base-100 shadow-xl">
            <div className="card-body items-center ">
                <p>{description}</p>
            </div>
            <div className=' mt-3 flex ml-10 items-center pb-5'>
                <div className="  w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                        className='w-16'
                        src={peopleImg} alt='' />
                </div>
                <div className=' ml-6 '>
                    <h2 className="card-title">{peopleName}</h2>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;