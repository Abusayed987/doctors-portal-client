import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal';
import AvailableService from './AvailableService';

const AvailableServices = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, "PP");

    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:4000/appointmentOptions?date=${date}`).then(res => res.json())
    })


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