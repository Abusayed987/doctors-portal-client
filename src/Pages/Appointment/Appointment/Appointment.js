import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableServices from '../AvailableServices/AvailableServices';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableServices
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvailableServices>
        </div>
    );
};

export default Appointment;