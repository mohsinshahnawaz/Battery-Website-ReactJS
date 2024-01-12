import { Box, Button } from "@mui/material";
import React from "react";
import "./Cards.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FiveStarRating from "../../../../assets/icons/Five star.svg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Navigation, useNavigate } from "react-router-dom";
export default function Cards({ name, image, price, reviews }) {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/batteries-details");
  };
  return (
    <Box className="cards-container">
      <Box className="card">
        <img src={image} alt="" />
        <Box className="cards-icons">
          <Box className="icon-div" title="preview" onClick={handleClick}>
            <VisibilityOutlinedIcon />
          </Box>
          <Box className="icon-div" title="add to wish list">
            <FavoriteBorderOutlinedIcon />
          </Box>
        </Box>
        <Box className="add-to-cart-btn">
          <Button>Add To Cart</Button>
        </Box>
      </Box>
      <Box className="batteries-name">{name}</Box>
      <Box className="batteries-price">${price}</Box>
      <Box className="rating-container">
        <Box>
          <img src={FiveStarRating} alt="rating" />
        </Box>
        <Box className="reviews-count">({reviews})</Box>
      </Box>
    </Box>
  );
}
