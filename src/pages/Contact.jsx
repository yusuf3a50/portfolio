import React from 'react';
import '../css/main.css';
import email from '../imgs/email.png'
import { BsLinkedin } from 'react-icons/bs';

function Contact() {
    return (
        <>
            <h1>Contact Page</h1>
            <p>
                <a href="https://linkedin.com/in/yusuf3a50/" target="_blank" rel="noopener noreferrer">
                    
                    My linked<BsLinkedin /> profile can be found here</a></p>
            <p>Email:
                <img src={email} alt="image of email address text" />
            </p>
        </>
    );
}

export default Contact;