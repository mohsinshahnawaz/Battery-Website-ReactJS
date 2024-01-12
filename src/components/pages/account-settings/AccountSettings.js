import React from "react";
import { Box, TextField } from "@mui/material";
import "./AccountSettings.css";
export default function AccountSettings() {
  return (
    <>
      <Box></Box>
      <Box className="account-main-container">
        <Box className="account-left-box">
          <Box component="label">Manage My Account</Box>
          <Box className="account-left-text">
            <Box className="text-items">My Profile</Box>
            <Box className="text-items">Address Book</Box>
            <Box className="text-items">My Payment Options</Box>
          </Box>
          <Box component="label">My Orders</Box>
          <Box className="account-left-text">
            <Box className="text-items">My Returns</Box>
            <Box className="text-items">My Cancellations</Box>
          </Box>
          <Box component="label">My WishList</Box>
          <Box className="account-left-text">
            {/* <Box>My Returns</Box> */}
            {/* <Box>My Cancellations</Box> */}
          </Box>
        </Box>
        <Box className="account-right-box">
          <Box className="account-box-one">
            <Box className="account-setting-heading">Edit Your Profile</Box>
            <Box className="account-text-fields">
              <Box className="name-and-inputs">
                <Box>First Name</Box>
                <Box className="account-input-fields">
                  <TextField placeholder="Name" type="text" />
                </Box>
              </Box>
              <Box className="name-and-inputs">
                <Box>Last Name</Box>
                <Box className="account-input-fields">
                  <TextField placeholder="Last Name" />
                </Box>
              </Box>
            </Box>
            <Box className="account-text-fields">
              <Box className="name-and-inputs">
                <Box>Email</Box>
                <Box className="account-input-fields">
                  <TextField placeholder="example@gmail.com" type="email" />
                </Box>
              </Box>
              <Box className="name-and-inputs">
                <Box>Address</Box>
                <Box className="account-input-fields">
                  <TextField type="text" placeholder="Street, 1111, Country" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="account-box-second">
            <Box className="account-password-changes-heading">
              Password Changes
            </Box>
            <Box className="password-input-fields">
              <TextField
                placeholder="Current Password"
                type="password"
                fullWidth
              />
            </Box>
            <Box className="password-input-fields">
              <TextField placeholder="New Password" type="password" fullWidth />
            </Box>
            <Box className="password-input-fields">
              <TextField
                placeholder="Confirm Password"
                type="password"
                fullWidth
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
