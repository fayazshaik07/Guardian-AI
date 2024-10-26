import React, { useState } from "react";
import Homepage from "./components/Homepage";
import CountrySelection from "./components/CountrySelection";
import PaymentGatewaySelection from "./components/PaymentGatewaySelection";
import CloudProviderSelection from "./components/CloudProviderSelection";

const App = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Shared scroll handler that can be passed to child components
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handler for when region is selected in CountrySelection
  const handleRegionSelect = () => {
    setIsPaymentModalOpen(true);
  };

  // Handler for payment gateway selection
  const handlePaymentSelection = () => {
    scrollToSection("cloud-section");
  };

  return (
    <div className="app-container">
      <section id="home-section">
        <Homepage onGetStarted={() => scrollToSection("country-section")} />
      </section>

      <section id="country-section">
        <CountrySelection onRegionSelect={handleRegionSelect} />
      </section>

      <PaymentGatewaySelection
        open={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onSelection={handlePaymentSelection}
      />

      <section id="cloud-section">
        <CloudProviderSelection />
      </section>
    </div>
  );
};

export default App;
