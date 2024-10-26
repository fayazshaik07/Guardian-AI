import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import CountrySelection from './components/CountrySelection';
import CloudProviderSelection from './components/CloudProviderSelection';
import PaymentGatewaySelection from './components/PaymentGatewaySelection';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country" element={<CountrySelection />} />
        <Route path="/payment-gateway" element={<PaymentGatewaySelection />} />
        <Route path="/cloud-provider" element={<CloudProviderSelection />} />
      </Routes>
    </Router>
  );
};

export default App;
