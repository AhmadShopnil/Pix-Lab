import React from 'react';

const HomeBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.alioze.com/wp-content/uploads/2020/07/photographer-agency.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 font-semibold">If you love to take photo, You are in right place.I am I have 5 years exprience in this field. If you buy servie from here you will enjoy it.</p>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner;