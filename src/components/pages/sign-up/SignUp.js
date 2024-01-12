import React from "react";
import { Box, TextField, Button, Grid } from "@mui/material";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/google-svg.svg";
import "./SignUp.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <Grid container className="log-in-main-container">
      <Grid item xs={12} sm={6} className="left-box"></Grid>
      <Grid item xs={12} sm={6} className="right-box">
        <Box className="right-items-box">
          <Box className="log-in-content">
            <Box className="login-heading">Create an account</Box>
            <Box className="login-text">Enter your details below</Box>
          </Box>
          <Box className="login-input-fields">
            <TextField
              type="text"
              variant="standard"
              label="Name"
              className="login-input"
            />
          </Box>
          <Box className="login-input-fields">
            <TextField
              type="email"
              variant="standard"
              label="Email or Phone Number"
              className="login-input"
            />
          </Box>
          <Box className="login-input-fields">
            <TextField
              type="password"
              variant="standard"
              label="Password"
              className="login-input"
            />
          </Box>
          <Box className="authentication-box-container">
            <Box className="authentication-btn-content">
              <Button className="login-btn">Create Account</Button>
            </Box>
            <Box className="google-btn">
              <Button>
                <GoogleIcon />
                Sign up with Google
              </Button>
            </Box>
            <Box className="already-have-account-box">
              <Box className="already-have-text">Already have an account?</Box>
              <Box className="login-text">
                <Link to="/login">Log in</Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
