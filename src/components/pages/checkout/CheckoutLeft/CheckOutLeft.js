import React from "react";
import "./CheckOutLeft.css";
import { Box, TextField, Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";
export default function CheckOutLeft() {
  return (
    <Box className="checkout-left-box">
      <Box component="span">Billing Details</Box>
      <Box className="checkout-name-and-inputs">
        <Box className="checkout-text">
          First Name<sup>*</sup>
        </Box>
        <Box className="checkout-account-input-fields">
          <TextField type="text" />
        </Box>
      </Box>
      <Box className="checkout-name-and-inputs">
        <Box className="checkout-text">Company Name</Box>
        <Box className="checkout-account-input-fields">
          <TextField type="text" />
        </Box>
      </Box>
      <Box className="checkout-name-and-inputs">
        <Box className="checkout-text">
          Street Address <sup>*</sup>
        </Box>
        <Box className="checkout-account-input-fields">
          <TextField type="text" />
        </Box>
      </Box>
      <Box className="checkout-name-and-inputs">
        <Box className="checkout-text">Apartment, floor etc. (optional)</Box>
        <Box className="checkout-account-input-fields">
          <TextField type="text" />
        </Box>
      </Box>
      <Box className="checkout-name-and-inputs">
        <Box className="checkout-text">
          Town/City <sup>*</sup>
        </Box>
        <Box className="checkout-account-input-fields">
          <TextField type="text" />
        </Box>
      </Box>
      <Box className="checkout-name-and-inputs">
        <Box className="checkout-text">
          Phone Number <sup>*</sup>
        </Box>
        <Box className="checkout-account-input-fields">
          <TextField type="number" />
        </Box>
      </Box>
      <Box className="checkout-name-and-inputs">
        <Box className="checkout-text">
          Email Address <sup>*</sup>
        </Box>
        <Box className="checkout-account-input-fields">
          <TextField type="email" />
        </Box>
      </Box>
      <Box className="checkout-check">
        <Box>
          <Checkbox
            defaultChecked
            size="medium"
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        </Box>
        <Box className="save-info">
          Save this information for faster check-out next time
        </Box>
      </Box>
    </Box>
  );
}
