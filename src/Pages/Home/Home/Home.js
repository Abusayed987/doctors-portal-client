import React from 'react';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceCards from '../ServiceCards/ServiceCards';
import TestimonialCards from '../Testimonial/TestimonialCards';
import BannerBg from '../../../assets/images/bg.png';
import ContactUs from '../ContactUs/ContactUs';



const Home = () => {
    return (
        <div className=' lg:mx-5'>
            <section className=' lg:pt-24' style={{
                background: `url(${BannerBg})`,
                backgroundSize: 'cover',
            }} >
                <Banner></Banner>
                <InfoCards></InfoCards>
            </section>
            <ServiceCards></ServiceCards>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <TestimonialCards></TestimonialCards>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;