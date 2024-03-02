import React from 'react';
import '../assets/styles/Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <p>{new Date().getFullYear()} My Shalom Application. All rights reserved.</p>
        </div>
    );
};

export default Footer;