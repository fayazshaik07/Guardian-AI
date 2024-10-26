import React, { useState } from "react";
import complianceBanner from "../assets/hipaa.png";
import guardianLogo from "../assets/guardian-logo.png";

interface HomepageProps {
  onGetStarted: () => void;
}

const Homepage: React.FC<HomepageProps> = ({ onGetStarted }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-start",
    alignItems: "center",
    fontFamily: "Barlow, sans-serif",
    background: "#eae5d0",
  };

  const contentWrapperStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
    marginTop: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: isHovered ? "#002a6d" : "#00338e",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  };

  return (
    <div style={containerStyle}>
      <img
        src={complianceBanner}
        alt="HIPAA Compliance"
        style={{
          width: "100%",
          height: "40vh",
          objectFit: "contain",
          backgroundColor: "#00338e",
        }}
      />

      <div style={contentWrapperStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "50%",
            paddingLeft: "20px",
          }}
        >
          <h1 style={{ color: "#333", fontSize: "2.5rem" }}>Guardian AI</h1>
          <p style={{ color: "#666", fontSize: "1.2rem" }}>
            Guardian AI helps you ensure that your cloud resources are compliant
            with HIPAA, GDPR, and PCI DSS.
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onGetStarted}
          >
            Get Started
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <img
            src={guardianLogo}
            alt="Guardian AI Logo"
            style={{ maxWidth: "600px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
