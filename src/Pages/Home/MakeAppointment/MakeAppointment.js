import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';
const MakeAppointment = () => {

    return (
        <section className='my-32' style={{
            background: `url(${appointment})`
        }}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" -mt-36 lg:w-1/2 hidden lg:block  rounded-lg scale-105 " alt='' />
                    <div>
                        <p className=' text-primary text-xl'>Appointment</p>
                        <h1 className="text-5xl font-bold leading-tight	text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton><Link>Get Started</Link></PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;