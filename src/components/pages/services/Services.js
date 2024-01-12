import { Box } from "@mui/material";
import React from "react";
import "./Services.css";
import ServicesIcon from "../../../assets/icons/service.svg";
import CallServiceIcon from "../../../assets/icons/customer-service.svg";
import MoneyBackIcon from "../../../assets/icons/moneyback.svg";

export default function Services() {
  return (
    <Box className="services-main-container">
      <Box className="services-content">
        <Box>
          <img src={ServicesIcon} alt="" />
        </Box>
        <Box>
          <Box className="heading">FREE AND FAST DELIVERY</Box>
          <Box className="text">Free delivery for all orders over $140</Box>
        </Box>
      </Box>
      <Box className="services-content">
        <Box>
          <img src={CallServiceIcon} alt="" />
        </Box>
        <Box>
          <Box className="heading">CUSTOMER SUPPORT</Box>
          <Box className="text">24/7 customer service</Box>
        </Box>
      </Box>
      <Box className="services-content">
        <Box>
          <img src={MoneyBackIcon} alt="" />
        </Box>
        <Box>
          <Box className="heading">MONEY BACK GUARANTEE</Box>
          <Box className="text">30-day money-back guarantee</Box>
        </Box>
      </Box>
    </Box>
  );
}
