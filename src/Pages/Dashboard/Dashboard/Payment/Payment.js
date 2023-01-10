import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData()
    const { treatment, price, appointmentDate, slot } = booking;
    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <div className='mt-4'>
                <p className='text-xl'>please pay <strong>${price} </strong> for your appointment on {appointmentDate} at {slot}</p>
            </div>
        </div>
    );
};

export default Payment;