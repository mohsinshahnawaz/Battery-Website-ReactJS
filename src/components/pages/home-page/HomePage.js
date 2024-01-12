import React from "react";
import BatteriesBannerMain from "../batteries-banner/BatteriesBannerMain";
import BestSales from "../best-sales/BestSales";
import NewArrival from "../new-arrival/NewArrival";
import Services from "../services/Services";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      style={{
        padding: "0px 70px",
      }}
    >
      <BatteriesBannerMain />
      <BestSales />
      <NewArrival />
      <Services />
    </Box>
  );
}
