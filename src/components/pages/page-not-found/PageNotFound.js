import { Box, Button } from "@mui/material";
import React from "react";
import "./PageNotFound.css";
export default function PageNotFoundPage() {
  return (
    <Box className="page-not-found-container">
      <Box component={"h1"}>404 Not Found</Box>
      <Box className="text-items-box">
        <Box component="label">
          You visited page not found. you may go home page
        </Box>
        <Box className="back-to-home-btn">
          <Button>Back to home page</Button>
        </Box>
      </Box>
    </Box>
  );
}
