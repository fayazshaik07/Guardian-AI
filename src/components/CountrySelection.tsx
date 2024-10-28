import React, { useState } from "react";
import usaFlag from "../assets/countries/us.png";
import ukFlag from "../assets/countries/gb.png";
import chinaFlag from "../assets/countries/cn.png";
import indiaFlag from "../assets/countries/in.png";
import australiaFlag from "../assets/countries/au.png";
import euFlag from "../assets/countries/de.png";
import { CSSProperties } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Autocomplete, TextField } from "@mui/material";

interface CountrySelectionProps {
  onRegionSelect: () => void;
}

interface Country {
  name: string;
  flag: string;
  regions: string[];
}

const countries: Country[] = [
  {
    name: "USA",
    flag: usaFlag,
    regions: [
      "Alabama", "Alaska", "Arizona", "Arkansas", "California",
      "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
      "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",
      "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
      "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
      "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
      "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
      "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
      "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
      "West Virginia", "Wisconsin", "Wyoming",
    ],
  },
  {
    name: "UK",
    flag: ukFlag,
    regions: [
      "England", "Scotland", "Wales", "Northern Ireland",
      "Greater London", "West Midlands", "Greater Manchester",
      "West Yorkshire", "Merseyside", "South Yorkshire",
      "Tyne and Wear", "Glasgow", "Birmingham", "Liverpool",
      "Edinburgh", "Cardiff", "Bristol", "Leeds", "Sheffield"
    ],
  },
  {
    name: "China",
    flag: chinaFlag,
    regions: ["Beijing", "Shanghai", "Guangdong", "Sichuan"],
  },
  {
    name: "India",
    flag: indiaFlag,
    regions: ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi"],
  },
  {
    name: "Australia",
    flag: australiaFlag,
    regions: ["New South Wales", "Victoria", "Queensland", "Western Australia"],
  },
  {
    name: "European Union",
    flag: euFlag,
    regions: ["Germany", "France", "Spain", "Italy", "Netherlands"],
  },
];

const CountrySelection: React.FC<CountrySelectionProps> = ({
  onRegionSelect,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | any>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | any>(null);
  const [message, setMessage] = useState<string>(""); // New state for message

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  const handleCountryClick = (country: Country) => {
    setSelectedCountry(country);
    setMessage("Select a Region"); // Set message when country is selected
  };

  const handleRegionSelection = (region: string | any) => {
    setSelectedRegion(region);
    onRegionSelect();
  };

  const cardStyle: CSSProperties = {
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "200px",
    border: "2px solid transparent",
    width: "90%",
    maxWidth: "250px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const regionContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    borderRadius: "12px",
    border: "2px solid transparent",
    boxShadow: "1px 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Barlow, sans-serif",
    width: "100%",
    height: "20rem",
    maxWidth: "20rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "12px",
  };

  const flagImageStyle: CSSProperties = {
    width: "10rem",
    height: "100px",
    objectFit: "contain",
    borderRadius: "8px",
    transition: "transform 0.3s ease",
    border: "2px solid transparent",
  };

  const carouselWrapperStyle: CSSProperties = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <div
      style={{
        fontFamily: "Barlow, sans-serif",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", padding: "6px", fontSize: "2.5rem" }}>
        Select a Country
      </h1>
      {message && <h2 style={{ textAlign: "center", color: "#555" }}>{message}</h2>} {/* Display message */}

      {selectedCountry ? (
        <>
          <div style={regionContainerStyle}>
            <div style={{ marginBottom: "20px" }}>
              <img
                src={selectedCountry.flag}
                alt={`${selectedCountry.name} flag`}
                style={{ width: "10rem", borderRadius: "8px" }}
              />
              <h3 style={{ textAlign: "center" }}>{selectedCountry.name}</h3>
            </div>
            <h3>Regions in {selectedCountry.name}</h3>
            <Autocomplete
              options={selectedCountry.regions}
              onChange={(e, value) => handleRegionSelection(value)}
              renderInput={(params) => (
                <TextField {...params} label="Select a region" variant="outlined" />
              )}
              sx={{ width: "100%", marginTop: "20px" }}
            />
          </div>
          <Button
            variant="contained"
            sx={{ margin: 2 }}
            onClick={() => setSelectedCountry(null)}
          >
            Select different country
          </Button>
        </>
      ) : (
        <div style={carouselWrapperStyle}>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay={false}
            keyBoardControl
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item"
          >
            {countries.map((country) => (
              <div
                key={country.name}
                onClick={() => handleCountryClick(country)}
                style={{
                  ...cardStyle,
                  transform:
                    selectedCountry?.name === country.name
                      ? "scale(1.05)"
                      : "scale(1)",
                  borderColor:
                    selectedCountry?.name === country.name
                      ? "#28a745"
                      : "transparent",
                }}
                className="country-card"
              >
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  style={flagImageStyle}
                />
                <div style={{ fontSize: "18px", fontWeight: "500", textAlign: "center", color: "#333", marginTop: "10px" }}>{country.name}</div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
      <style>
        {`
          .carousel-item {
            display: flex;
            justify-content: center;
            padding: 10px;
          }
          .country-card:hover {
            transform: scale(1.05) !important;
            box-shadow: 0 6px 12px rgba(0,0,0,0.15);
          }
          .react-multi-carousel-item {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default CountrySelection;
