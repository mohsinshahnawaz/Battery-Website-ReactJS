import React from "react";
import "./Login.css";
import { Box, TextField, Button, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginMain() {
  return (
    <Box className="log-in-main-container">
      <Box className="left-box"></Box>
          <Box className="right-box">
        <Box className="right-items-box">
          <Box className="log-in-content">
            <Box className="login-heading">Log in to Exclusive</Box>
            <Box className="login-text">Enter your details below</Box>
          </Box>
          <Box className="login-input-fields">
            <TextField
              type="email"
              variant="standard"
              label="Email or Phone Number"
              required
              className="login-input"
            />
          </Box>
          <Box className="login-input-fields">
            <TextField
              type="password"
              variant="standard"
              label="Password"
              required
              className="login-input"
            />
          </Box>
          <Box className="authentication-box">
            <Box className="authentication-btn">
              <Button className="login-btn">Log in</Button>
            </Box>
            <Box className="forget">
              <MuiLink component={Link} to="/"> Forget Password? </MuiLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
