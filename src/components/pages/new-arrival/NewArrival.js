import { Box } from "@mui/material";
import React from "react";
import "./NewArrival.css";
import NewArrivalCards from "./new-arrival-cards/NewArrivalCards";
export default function NewArrival() {
  return (
    <Box className="new-arrival-main-container">
      <Box className="new-arrival-heading">
        <Box className="arrival-border"></Box>
        <Box className="arrival-label">For You</Box>
      </Box>
      <Box className="arrival-item">New Arrival</Box>

      <Box>
        <NewArrivalCards />
      </Box>
    </Box>
  );
}
