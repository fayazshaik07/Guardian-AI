import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentGatewaySelection: React.FC = () => {
    const navigate = useNavigate();

    const handleSelection = (option: string) => {
        // Navigate to cloud provider selection after the user selects an option
        navigate('/cloud-provider');
    };

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Barlow, sans-serif', padding: '20px' }}>
            <h1>Are you planning to use a payment gateway?</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                <button
                    onClick={() => handleSelection('yes')}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        borderRadius: '8px', // Adds rounding to the buttons
                        border: 'none', // Removes the default border
                        backgroundColor: '#28a745', // A nice green background
                        color: '#fff', // White text
                        transition: 'background-color 0.3s ease', // Smooth hover effect
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
                >
                    Yes
                </button>
                <button
                    onClick={() => handleSelection('no')}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        borderRadius: '8px', // Adds rounding to the buttons
                        border: 'none', // Removes the default border
                        backgroundColor: '#dc3545', // Red background
                        color: '#fff', // White text
                        transition: 'background-color 0.3s ease', // Smooth hover effect
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c82333')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc3545')}
                >
                    No
                </button>
            </div>
        </div>
    );
};

export default PaymentGatewaySelection;
