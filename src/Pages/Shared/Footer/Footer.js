import React from 'react';
import footer from '../../../assets/images/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='my-10' style={{
            background: `url(${footer})`
        }}>
            <footer className="footer p-10  text-base-content w-full  place-items-center">
                <div>
                    <span className="footer-title text-xl">Services</span>
                    <Link to='/' className="link link-hover text-lg">Branding</Link>
                    <Link to='/' className="link link-hover text-lg">Design</Link>
                    <Link to='/' className="link link-hover text-lg">Marketing</Link>
                    <Link to='/' className="link link-hover text-lg">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title text-xl">Company</span>
                    <Link to='/' className="link link-hover text-lg">About us</Link>
                    <Link to='/' className="link link-hover text-lg">Contact</Link>
                    <Link to='/' className="link link-hover text-lg">Jobs</Link>
                    <Link to='/' className="link link-hover text-lg">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title text-xl">Legal</span>
                    <Link to='/' className="link link-hover text-lg">Terms of use</Link>
                    <Link to='/' className="link link-hover text-lg">Privacy policy</Link>
                    <Link to='/' className="link link-hover text-lg">Cookie policy</Link>
                </div>
            </footer>
            <footer className=" text-center my-2 text-lg">
                <p>Copyright 2022 All Rights Reserved</p>
            </footer>
        </section>
    );
};

export default Footer;