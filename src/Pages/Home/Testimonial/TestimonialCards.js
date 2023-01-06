import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const TestimonialCards = () => {

    const testimonialCardsData = [
        {
            id: 1,
            peopleName: 'Winson Herry',
            address: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            peopleImg: people1,
        },
        {
            id: 2,
            peopleName: 'Winson Herry',
            address: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            peopleImg: people2,
        },
        {
            id: 3,
            peopleName: 'Winson Herry',
            address: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            peopleImg: people3,
        },
    ]

    return (
        <div className=' w-11/12 mx-auto'>
            <div className='mb-20'>
                <h3 className='text-primary font-bold text-xl'>Testimonial</h3>
                <h1 className='text-4xl '>What Our Patients Says</h1>
            </div>
            <div className='grid gap-4 place-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20'>
                {
                    testimonialCardsData.map(testimonialData => <TestimonialCard
                        key={testimonialData.id}
                        testimonialData={testimonialData}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default TestimonialCards;