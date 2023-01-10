import React from 'react';

const AvailableService = ({ availableService, setTreatment }) => {
    const { name, slots, price } = availableService;
    return (
        <div className="card w-80  bg-base-100 shadow-lg">
            <div className="card-body items-center ">
                <h2 className=" text-xl  text-secondary ">{name}</h2>
                <p> {slots.length > 0 ? slots[0] : 'Try Another'}</p>
                <p className='text-sm  '>
                    {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
                </p>
                <p><small>Price: ${price}</small></p>
                <label
                    htmlFor="booking-modal"
                    disabled={!slots.length}
                    onClick={() => setTreatment(availableService)}
                    // className="btn btn-primary bg-gradient-to-r from-secondary  to-primary text-white "
                    className={`${!slots.length ? "btn " : "btn btn-primary bg-gradient-to-r from-secondary  to-primary text-white "}`}
                >Book Appointment</label>
            </div>
        </div>
    );
};

export default AvailableService;