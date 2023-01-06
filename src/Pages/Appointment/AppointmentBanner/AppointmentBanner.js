import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import AppointmentBG from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <section className=' lg:pt-24 lg:pb-10'
            style={{
                background: `url(${AppointmentBG})`,
                backgroundSize: 'cover',
            }}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className=" lg:w-1/2  rounded-lg shadow-2xl" alt='' />
                    <div className=' lg:mr-8'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AppointmentBanner;