import React from "react";
import { Box, InputAdornment, TextField, Grid } from "@mui/material";
import { ReactComponent as SendIcon } from "../../../assets/icons/icon-send.svg";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <Box component="div" className="main-footer-container">
        <Box>
          <Box component="div" className="box-one">
            <Box component="label">Exclusive</Box>
            <Box component="span">Subscribe</Box>
            <Box component="div" className="first-order-off">
              Get 10% off your first order
            </Box>
            <Box component="div" className="text-field">
              <TextField
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SendIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="Enter Your Email"
              />
            </Box>
          </Box>
        </Box>
        <Box component="div" className="footer-second-container">
          <Grid className="grid" container alignItems="center" gap={10} spacing={0}>
            <Grid item direction="column" className="box-two">
              <Box component="label">Support</Box>
              <Box>
                111 Somewhere, <br />
                Address, Country.
              </Box>
              <Box>example@gmail.com</Box>
              <Box>+00000-11111-11111</Box>
            </Grid>
            <Grid direction="column" item className="box-three">
              <Box component="label">Account</Box>
              <Box>My Account</Box>
              <Box>Login / Register</Box>
              <Box> Cart</Box>
              <Box>Wish List</Box>
              <Box>Shop</Box>
            </Grid>
            <Grid direction="column" className="box-four">
              <Box component="label">Quick Link</Box>
              <Box>Privacy Policy</Box>
              <Box>Terms Of Use</Box>
              <Box>FAQ</Box>
              <Box>Contact</Box>
            </Grid>
          </Grid>     
        </Box>
      </Box>  
      <Box component="div" className="batteries-copyrights">
        &copy; Copyright PamiPami 2023. All right reserved
      </Box>
    </>
  );
}
