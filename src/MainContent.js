import React from 'react';
import './styles.css';
import './MainContent.css';


const MainContent = () => {
    return (
        <main>
            <div className="image-slideshow">
                <img src="t-1.jpg" alt="Venkateshwara Swamy" className="slide active" />
                <img src="t-2.jpg" alt="Venkateshwara Swamy" className="slide" />
                <img src="t-3.jpg" alt="Venkateshwara Swamy" className="slide" />
            </div>
            <div className="other-content">
                <h2>Welcome to Sri Venkateshwara Swamy Temple</h2>
                <p>Experience the divinity and serenity at our temple. Join us for daily and special sevas, and explore the rich history and heritage of our temple.</p>
            </div>
        </main>
    );
};

export default MainContent;
