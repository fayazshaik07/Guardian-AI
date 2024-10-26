import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import complianceBanner from '../assets/hipaa.png';  // HIPAA Banner
import guardianLogo from '../assets/guardian-logo.png';  // Guardian AI Logo
import { CSSProperties } from 'react';

const Homepage: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const containerStyle: CSSProperties = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: 'Barlow, sans-serif',
        background: '#eae5d0'
    };

    const contentWrapperStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%', // Adjust this to control width
        alignItems: 'center',
        marginTop: '20px',
    };

    const textWrapperStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '50%',
        paddingLeft: '20px',
    };

    const logoWrapperStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
        alignItems: 'center',
    };

    const bannerStyle: CSSProperties = {
        width: '100%',
        height: '40vh',
        objectFit: 'contain',
        backgroundColor: '#00338e',
    };

    const logoStyle: CSSProperties = {
        maxWidth: '600px', // Adjust logo size
        maxHeight: 'auto',
    };

    const buttonStyle: CSSProperties = {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: isHovered ? '#002a6d' : '#00338e', // Change background based on hover state
        color: '#fff', // White text for button
        border: 'none',
        borderRadius: '5px', // Rounded corners
        transition: 'background-color 0.3s', // Smooth transition for hover
    };

    return (
        <div style={containerStyle}>
            {/* HIPAA Banner */}
            <img src={complianceBanner} alt="HIPAA Compliance" style={bannerStyle} />

            {/* Content and Logo Area */}
            <div style={contentWrapperStyle}>
                {/* Left Side: Guardian AI Text and Get Started Button */}
                <div style={textWrapperStyle}>
                    <h1 style={{ color: '#333', fontSize: '2.5rem' }}>Guardian AI</h1>
                    <p style={{ color: '#666', fontSize: '1.2rem' }}>
                        Guardian AI helps you ensure that your cloud resources are compliant with HIPAA, GDPR, and PCI DSS.
                    </p>
                    <Link to="/country">
                        <button
                            style={buttonStyle}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Right Side: Guardian AI Logo */}
                <div style={logoWrapperStyle}>
                    <img src={guardianLogo} alt="Guardian AI Logo" style={logoStyle} />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
