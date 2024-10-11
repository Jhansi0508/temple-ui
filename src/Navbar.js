import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="index.html">Home</a>
                </li>
                <li className="nav-item">
                    <a href="about.html">About</a>
                    <ul className="dropdown-menu">
                        <li><a href="history.html">History</a></li>
                        <li><a href="management.html">Management</a></li>
                        <li><a href="location.html">Location</a></li>
                        <li><a href="way-to-reach.html">Way to Reach</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="sevas.html">Sevas</a>
                    <ul className="dropdown-menu">
                        <li><a href="daily.html">Daily</a></li>
                        <li><a href="weekly.html">Weekly</a></li>
                        <li><a href="monthly.html">Monthly</a></li>
                        <li><a href="annually.html">Annually</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="online-services.html">Online Services</a>
                    <ul className="dropdown-menu">
                        <li><a href="seva-booking.html">Seva Booking</a></li>
                        <li><a href="donations.html">Donations</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="contact.html">Contact Us</a>
                    <ul className="dropdown-menu">
                        <li><a href="address.html">Sri Venkateshwara Swamy Temple</a></li>
                        <li><a href="location.html">Hasthinapur, Hyderabad - 501511</a></li>
                        <li><a href="telangana.html">Telangana, India</a></li>
                        <li><a href="phone.html">+91-9391625717</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;