import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section className='mt-32 ' style={{
            background: `url(${appointment})`
        }}>
            <div className='text-center mb-10 pt-16'>
                <h3 className='text-primary font-bold text-xl'>Contact Us</h3>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>
            </div>

            <div className=' pb-16 mx-auto text-center'>
                <form className=" w-4/12 mx-auto">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input input-bordered text-xl" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered text-xl" />
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered  h-32 text-xl" placeholder="Your message"></textarea>
                        </div>
                    </div>
                </form>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;