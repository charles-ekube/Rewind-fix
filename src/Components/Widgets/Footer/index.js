import React from 'react';
import { LinkedIn, Twitter, YouTube } from '@material-ui/icons';
import { Logo } from '../../../Assets';
import './style.css';



const Footer = () => {

    return (
        <>
            <section className='footer'>
                <div className='footer-logo'>
                    <img src={Logo} alt='logo'/>
                    <h2>Rewind</h2>
                </div>
                <div>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Rewind Pro</li>
                        <li>Help Center</li>
                        <li>Cookie Preference</li>
                        <li>Legal Terms</li>
                        <li>Contact Us</li>
                        <li>Jobs</li>
                        <li>Advertisement</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Twitter/></li>
                        <li><YouTube/></li>
                        <li><LinkedIn/></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export {Footer}
