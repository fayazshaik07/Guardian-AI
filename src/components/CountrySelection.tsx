import React, { useState } from 'react';
import usaFlag from '../assets/countries/us.png';
import ukFlag from '../assets/countries/gb.png';
import chinaFlag from '../assets/countries/cn.png';
import indiaFlag from '../assets/countries/in.png';
import australiaFlag from '../assets/countries/au.png';
import euFlag from '../assets/countries/de.png';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

interface Country {
    name: string;
    flag: string;
    regions: string[];
}

const countries: Country[] = [
    {
        name: 'USA',
        flag: usaFlag,
        regions: [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
            'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
            'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
            'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
            'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
            'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
    },

    { name: 'UK', flag: ukFlag, regions: ['England', 'Scotland', 'Wales', 'Northern Ireland'] },
    { name: 'China', flag: chinaFlag, regions: ['Beijing', 'Shanghai', 'Guangdong', 'Sichuan'] },
    { name: 'India', flag: indiaFlag, regions: ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Delhi'] },
    { name: 'Australia', flag: australiaFlag, regions: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia'] },
    { name: 'European Union', flag: euFlag, regions: ['Germany', 'France', 'Spain', 'Italy', 'Netherlands'] },
];

const CountrySelection: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState<Country | any>(null);
    const [hoveredCountryName, setHoveredCountryName] = useState<string | any>(null);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

    const handleCountryClick = (country: Country) => {
        setSelectedCountry(country);
    };

    const navigate = useNavigate();

    const handleRegionSelection = (region: string) => {
        setSelectedRegion(region);
        // Navigate to the payment gateway page after selecting a region
        navigate('/payment-gateway');
    };

    const flagStyle: CSSProperties = {
        flex: '1 1 calc(33.33% - 20px)',
        maxWidth: '500px',
        height: 'auto',
        border: '2px solid transparent',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
        marginBottom: '20px',
        position: 'relative',
    };

    const selectedFlagStyle: string = '#28a745';

    const tooltipStyle: CSSProperties = {
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '4px',
        whiteSpace: 'nowrap',
        opacity: hoveredCountryName ? 1 : 0,
        transition: 'opacity 0.3s ease',
    };

    // Styles for the region selection container
    const regionContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Barlow, sans-serif',
    };

    const selectStyle: CSSProperties = {
        fontFamily: 'Barlow, sans-serif',
        fontSize: '18px', // Increase font size
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginTop: '20px',
    };

    return (
        <div style={{ fontFamily: 'Barlow, sans-serif' }}>
            <h2>Select a Country</h2>

            {selectedCountry ? (
                <div style={regionContainerStyle}>
                    <div style={{ marginBottom: '20px' }}>
                        <img
                            src={selectedCountry.flag}
                            alt={`${selectedCountry.name} flag`}
                            style={{ width: '100px', borderRadius: '8px' }}
                        />
                        <h3>{selectedCountry.name}</h3>
                    </div>
                    <h3>Regions in {selectedCountry.name}</h3>
                    <select style={selectStyle}
                     onChange={(e) => handleRegionSelection(e.target.value)}>
                        <option value="">Select a region</option>
                        {selectedCountry.regions.map((region: any) => (
                            <option key={region} value={region}>
                                {region}
                            </option>
                        ))}
                    </select>
                </div>
            ) : (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {countries.map((country) => (
                        <div
                            key={country.name}
                            onClick={() => handleCountryClick(country)}
                            onMouseEnter={() => setHoveredCountryName(country.name)}
                            onMouseLeave={() => setHoveredCountryName(null)}
                            style={{
                                ...flagStyle,
                                borderColor: selectedCountry?.name === country.name ? selectedFlagStyle : 'transparent',
                                display: selectedCountry && selectedCountry.name !== country.name ? 'none' : 'block',
                                transform: hoveredCountryName === country.name ? 'scale(1.10)' : 'scale(1)', // Scale on hover
                                transition: 'transform 0.3s ease', // Smooth transition
                            }}
                        >

                            <img src={country.flag} alt={`${country.name} flag`} style={{ width: '100%', borderRadius: '8px' }} />
                            <div style={tooltipStyle}>{hoveredCountryName === country.name ? country.name : null}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CountrySelection;
