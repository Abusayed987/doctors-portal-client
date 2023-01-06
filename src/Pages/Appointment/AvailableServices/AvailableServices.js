import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal';
import AvailableService from './AvailableService';

const AvailableServices = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch("appointmentOption.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAppointmentOptions(data)
            })
            .catch(err => console.error(err))

    }, [])


    return (
        <section className=''>
            <div className='text-center pb-6  mt-16'>
                <h2 className='text-secondary font-xl'>Available Services on
                    {format(selectedDate, 'PP')}
                </h2>
                <p className=' text-accent'>Please select a service.</p>
            </div>
            <div className='grid gap-4 place-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-4'>
                {
                    appointmentOptions.map(availableService => <AvailableService
                        key={availableService._id}
                        availableService={availableService}
                        setTreatment={setTreatment}
                    ></AvailableService>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableServices;