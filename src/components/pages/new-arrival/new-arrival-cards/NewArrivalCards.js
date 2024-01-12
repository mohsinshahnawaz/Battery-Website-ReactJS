import React from "react";
import "./NewArrivalCards.css";
import { Box, Button } from "@mui/material";
export default function NewArrivalCards() {
  return (
    <Box className="arrival-cards-main-container">
      <Box className="card-left">
        <Box className="card-content">
          <Box className="title">This is a Title</Box>
          <Box className="description">
            This is a small description <br />
            Click to edit this.
          </Box>
          <Box className="shop-now-btn">
            <Button>Shop Now</Button>
          </Box>
        </Box>
      </Box>
      <Box className="card-right">
        <Box className="card-top">
          <Box className="card-top-content">
            <Box className="title">This is a Title</Box>
            <Box className="description">
              This is a small description Edit Here.
            </Box>
            <Box className="shop-now-btn">
              <Button>Shop Now</Button>
            </Box>
          </Box>
        </Box>
        <Box className="card-bottom">
          <Box className="left-card">
            <Box className="card-bottom-content">
              <Box className="title">This is a Title</Box>
              <Box className="description">Here Goes a short text.</Box>
              <Box className="shop-now-btn">
                <Button>Shop Now</Button>
              </Box>
            </Box>
          </Box>
          <Box className="right-card">
            <Box className="card-bottom-content">
              <Box className="title">This is a Title</Box>
              <Box className="description">Here Goes a short text.</Box>
              <Box className="shop-now-btn">
                <Button>Shop Now</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
