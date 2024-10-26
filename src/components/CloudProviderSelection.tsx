import React, { useState, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import awsImage from '../assets/aws.png';
import azureImage from '../assets/azure.png';
import googleImage from '../assets/googlec.png';
import ibmImage from '../assets/ibm.png';
import oracleImage from '../assets/oracle.png';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

const CloudProviderSelection: React.FC = () => {
    const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
    const [hoveredProvider, setHoveredProvider] = useState<string | null>(null);

    const providers = [
        { name: 'AWS', image: awsImage },
        { name: 'Azure', image: azureImage },
        { name: 'Google Cloud', image: googleImage },
        { name: 'IBM', image: ibmImage },
        { name: 'Oracle', image: oracleImage },
    ];

    const azureResources = [
        'Virtual Machines (VMs)',
        'Azure Functions (serverless computing)',
        'Azure Kubernetes Service (AKS)',
        'App Service',
        'Azure Batch',
        'Azure Spring Apps',
        'Azure Blob Storage',
        'Azure Files',
        'Azure Queue Storage',
        'Azure Table Storage',
        'Azure Disk Storage',
        'Azure Archive Storage',
        'Azure SQL Database',
        'Azure Cosmos DB',
        'Azure Database for MySQL',
        'Azure Database for PostgreSQL',
        'Azure Database for MariaDB',
        'Azure Cache for Redis',
        'Azure Virtual Network (VNet)',
        'Azure Load Balancer',
        'Azure Application Gateway',
        'Azure VPN Gateway',
        'Azure ExpressRoute',
        'Azure DNS',
        'Azure Active Directory (AAD)',
        'Azure Security Center',
        'Azure Key Vault',
        'Azure Sentinel',
        'Azure Policy',
        'Azure Machine Learning',
        'Cognitive Services',
        'Azure Bot Services',
        'Azure Synapse Analytics',
        'Azure HDInsight',
        'Azure Databricks',
        'Azure Stream Analytics',
        'Azure Data Lake Storage',
        'Azure DevOps',
        'Azure DevTest Labs',
        'Visual Studio App Center',
        'Azure IoT Hub',
        'Azure IoT Central',
        'Azure Digital Twins',
        'Azure Monitor',
        'Azure Automation',
        'Azure Resource Manager (ARM)',
        'Azure Cost Management',
        'Azure Logic Apps',
        'Azure Service Bus',
        'Azure Event Grid',
        'Azure Migrate',
        'Azure Site Recovery',
        'Azure Blockchain Service',
        'Azure Media Services',
        'Azure Functions Proxies'

    ];

    // Style for each cloud provider's image container
    const providerStyle: CSSProperties = {
        flex: '1 1 calc(33.33% - 20px)',
        maxWidth: '200px',
        height: 'auto',
        border: '2px solid transparent',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
        marginBottom: '20px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const selectedProviderStyle: string = '#28a745'; // Green color for selected provider

    return (
        <div style={{ fontFamily: 'Barlow, sans-serif', textAlign: 'center', marginTop: '20px' }}>
            {/* Conditionally render the header */}
            {selectedProvider === null && <h1>Select a Cloud Provider</h1>}

            {selectedProvider === null ? (
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {providers.map((provider) => (
                        <div
                            key={provider.name}
                            onClick={() => setSelectedProvider(provider.name)}
                            onMouseEnter={() => setHoveredProvider(provider.name)}
                            onMouseLeave={() => setHoveredProvider(null)}
                            style={{
                                ...providerStyle,
                                borderColor: selectedProvider === provider.name ? selectedProviderStyle : 'transparent',
                                transform: hoveredProvider === provider.name ? 'scale(1.20)' : 'scale(1)',
                            }}
                        >
                            <img
                                src={provider.image}
                                alt={provider.name}
                                style={{ width: '100%', borderRadius: '8px', transition: 'transform 0.3s ease' }}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <h2>Selected Provider: {selectedProvider}</h2>
                    {selectedProvider === 'Azure' && (
                        <div style={{ width: '300px', margin: '20px auto' }}>
                            <Autocomplete
                                options={azureResources}
                                renderInput={(params) => (
                                    <TextField {...params} label="Search Azure Resources" variant="outlined" />
                                )}
                                style={{ fontFamily: 'Barlow, sans-serif' }}
                            />
                        </div>
                    )}

                    <div style={{ marginTop: '20px' }}>
                        <Link to="/">
                            <button
                                style={{
                                    padding: '10px 20px',
                                    fontSize: '16px',
                                    fontFamily: 'Barlow, sans-serif',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    border: 'none',
                                    transition: 'background-color 0.3s ease',
                                }}
                            >
                                Check Compliance
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CloudProviderSelection;
