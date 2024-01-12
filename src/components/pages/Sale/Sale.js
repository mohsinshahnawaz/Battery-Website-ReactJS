import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./Sales.css";
import { Link } from "react-router-dom";
export default function Sale() {
  return (
    <Box component="div" className="sales-container">
      <Box component="span">
        Summer Sale For All Batteries - OFF 15%!{" "}
        <Link to="/shop">
          <u>ShopNow</u>
        </Link>
      </Box>
    </Box>
  );
}
