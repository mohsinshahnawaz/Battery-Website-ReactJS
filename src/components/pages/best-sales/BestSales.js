import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import "./BestSales.css";
import Cards from "./cards/Cards";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { CardsData } from "../../../dummy-data/data";

export default function BestSales() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % CardsData.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + CardsData.length) % CardsData.length
    );
  };

  return (
    <Box className="best-sales-container">
      <Box className="this-month-sales">
        <Box className="border"></Box>
        <Box className="banner-heading">This Month</Box>
      </Box>
      <Box className="best-sales-heading">
        <Box className="best-sales-content-items">
          <Box className="best-sales-label">Best Sales</Box>
          <Box className="arrows">
            <Box className="icons" onClick={handlePrevCard}>
              <ArrowBackOutlinedIcon />
            </Box>
            <Box className="icons" onClick={handleNextCard}>
              <ArrowForwardOutlinedIcon />
            </Box>
          </Box>
        </Box>
        <Box className="cards-content-container">
          <Box
            className="cards-slider"
            style={{
              transform: `translateX(-${
                currentCardIndex * (100 / CardsData.length)
              }%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {CardsData.map((card, index) => (
              <Cards
                key={index}
                name={card.name}
                image={card.image}
                price={card.price}
                reviews={card.reviews}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="view-all-product-btn">
        <Button>View All Products</Button>
      </Box>
    </Box>
  );
}
