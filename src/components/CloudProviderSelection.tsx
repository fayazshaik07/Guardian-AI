import React, { useState, CSSProperties } from "react";
import { Link } from "react-router-dom";
import awsImage from "../assets/aws.png";
import azureImage from "../assets/azure.png";
import googleImage from "../assets/googlec.png";
import ibmImage from "../assets/ibm.png";
import oracleImage from "../assets/oracle.png";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";

const CloudProviderSelection: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [hoveredProvider, setHoveredProvider] = useState<string | null>(null);

  const providers = [
    { name: "AWS", image: awsImage },
    { name: "Azure", image: azureImage },
    { name: "Google Cloud", image: googleImage },
    { name: "IBM", image: ibmImage },
    { name: "Oracle", image: oracleImage },
  ];

  const azureResources = [
    "Virtual Machines (VMs)",
    "Azure Functions (serverless computing)",
    "Azure Kubernetes Service (AKS)",
    "App Service",
    "Azure Batch",
    "Azure Spring Apps",
    "Azure Blob Storage",
    "Azure Files",
    "Azure Queue Storage",
    "Azure Table Storage",
    "Azure Disk Storage",
    "Azure Archive Storage",
    "Azure SQL Database",
    "Azure Cosmos DB",
    "Azure Database for MySQL",
    "Azure Database for PostgreSQL",
    "Azure Database for MariaDB",
    "Azure Cache for Redis",
    "Azure Virtual Network (VNet)",
    "Azure Load Balancer",
    "Azure Application Gateway",
    "Azure VPN Gateway",
    "Azure ExpressRoute",
    "Azure DNS",
    "Azure Active Directory (AAD)",
    "Azure Security Center",
    "Azure Key Vault",
    "Azure Sentinel",
    "Azure Policy",
    "Azure Machine Learning",
    "Cognitive Services",
    "Azure Bot Services",
    "Azure Synapse Analytics",
    "Azure HDInsight",
    "Azure Databricks",
    "Azure Stream Analytics",
    "Azure Data Lake Storage",
    "Azure DevOps",
    "Azure DevTest Labs",
    "Visual Studio App Center",
    "Azure IoT Hub",
    "Azure IoT Central",
    "Azure Digital Twins",
    "Azure Monitor",
    "Azure Automation",
    "Azure Resource Manager (ARM)",
    "Azure Cost Management",
    "Azure Logic Apps",
    "Azure Service Bus",
    "Azure Event Grid",
    "Azure Migrate",
    "Azure Site Recovery",
    "Azure Blockchain Service",
    "Azure Media Services",
    "Azure Functions Proxies",
  ];

  const awsResources = [
    "EC2 Instances",
    "Lambda (serverless computing)",
    "Elastic Kubernetes Service (EKS)",
    "Elastic Beanstalk",
    "AWS Batch",
    "AWS Fargate",
    "S3 (Simple Storage Service)",
    "EBS (Elastic Block Store)",
    "SQS (Simple Queue Service)",
    "DynamoDB",
    "RDS (Relational Database Service)",
    "Aurora",
    "Redshift",
    "ElastiCache",
    "VPC (Virtual Private Cloud)",
    "CloudFront",
    "Route 53",
    "IAM (Identity and Access Management)",
    "CloudWatch",
    "CloudTrail",
    "AWS Config",
    "AWS Shield",
    "AWS WAF (Web Application Firewall)",
    "AWS Key Management Service (KMS)",
    "AWS Secrets Manager",
    "AWS CodePipeline",
    "AWS CodeBuild",
    "AWS CodeDeploy",
    "AWS Step Functions",
    "AWS Glue",
    "AWS Data Pipeline",
    "AWS IoT Core",
    "AWS AppSync",
    "AWS Amplify",
    "AWS SageMaker",
    "AWS QuickSight",
    "AWS Elastic Load Balancing",
    "AWS Direct Connect",
    "AWS Snowball",
    "AWS Outposts",
  ];

  // Style for each provider card
  const providerStyle: CSSProperties = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "1px solid transparent",
    boxShadow: "1px 4px 8px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const selectedProviderStyle: string = "#28a745"; // Green color for selected provider
  // Style for the grid container
  const gridContainerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Barlow, sans-serif",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      {/* Conditionally render the header */}
      {selectedProvider === null && (
        <h1 style={{ textAlign: "center", padding: "6px", fontSize: "2.5rem" }}>
          Select a Cloud Provider
        </h1>
      )}

      {selectedProvider === null ? (
        <div style={gridContainerStyle}>
          {providers.map((provider) => (
            <div
              key={provider.name}
              onClick={() => setSelectedProvider(provider.name)}
              onMouseEnter={() => setHoveredProvider(provider.name)}
              onMouseLeave={() => setHoveredProvider(null)}
              style={{
                ...providerStyle,
                borderColor:
                  selectedProvider === provider.name
                    ? selectedProviderStyle
                    : "transparent",
                transform:
                  hoveredProvider === provider.name ? "scale(1.1)" : "scale(1)",
              }}
            >
              <img
                src={provider.image}
                alt={provider.name}
                style={{
                  width: "100%",
                  maxWidth: "15rem",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>Selected Provider: {selectedProvider}</h2>
          <div style={{ width: "300px", margin: "20px auto" }}>
            <Autocomplete
              options={selectedProvider === "Azure" ? azureResources : awsResources}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={`Search ${selectedProvider} Resources`}
                  variant="outlined"
                />
              )}
              style={{ fontFamily: "Barlow, sans-serif" }}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                fontFamily: "Barlow, sans-serif",
                cursor: "pointer",
                borderRadius: "8px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Check Compliance
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudProviderSelection;
