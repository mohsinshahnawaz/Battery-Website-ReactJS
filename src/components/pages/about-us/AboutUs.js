import React from "react";
import { Box } from "@mui/material";
import "./AboutUs.css";
import Services from "../services/Services";
import { AboutUsData } from "../../../dummy-data/data";
export default function AboutUs() {
  return (
    <>
      <Box className="about-us-main-container">
        <Box className="about-left-box">
          <Box className="about-left-content">
            <Box className="our-title"> Our Story</Box>
            <Box className="about-us-content">
              <Box className="our-story">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Box>
              <Box className="our-story">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="about-right-box"></Box>
      </Box>
      
      <Box className="total-contribution-container">
        {AboutUsData.map(({ image, number, text }) => (
          <>
            <Box className="total-box">
              <Box className="border-one">
                <Box className="box-image">
                  <img src={image} alt="" />
                </Box>
              </Box>
              <Box className="box-items">
                <Box className="box-number">{number}</Box>
                <Box className="box-text">{text}</Box>
              </Box>
            </Box>
          </>
        ))}
      </Box>
      <Box>
        <Services />
      </Box>
    </>
  );
}
