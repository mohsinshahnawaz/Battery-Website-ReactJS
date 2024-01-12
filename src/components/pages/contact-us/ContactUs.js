import React, { useState } from "react";
import "./ContactUs.css";
import {
  Box,
  TextField,
  TextareaAutosize,
  Button,
  FormControl,
} from "@mui/material";
import PhoneIcon from "../../../assets/icons/icons-phone.svg";
import MailIcon from "../../../assets/icons/icons-mail.svg";
import { styled } from "@mui/material";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const StyledTextField = styled(TextField)(() => ({
    "& .MuiFormLabel-asterisk": {
      color: "red",
    },
  }));

  const handleChange = (field, value) => {
    if (field === "phone") {
      value = Math.max(0, value);
    }
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
    console.log(formData, "formData");
  };

  return (
    <Box className="contact-us-main-container">
      <Box className="contact-left-box">
        <Box className="contact-items">
          <Box className="image-box">
            <Box className="cell-phone-icon">
              <img src={PhoneIcon} alt="" />
            </Box>
            <Box className="heading">Call Us</Box>
          </Box>
          <Box className="contact-number-text">
            <Box>We are availabel 24/7, 7 days a week.</Box>
            <Box>Phone: +00000 11111 11111</Box>
          </Box>
        </Box>
        <hr />
        <Box className="contact-items">
          <Box className="image-box">
            <Box>
              <img src={MailIcon} alt="" />
            </Box>
            <Box className="heading">Email Us</Box>
          </Box>
          <Box className="contact-number-text">
            <Box>
              Fill out our form and we will contact <br />
              you within 24 hours.
            </Box>
            <Box> Emails: customer@example.com</Box>
            <Box>Emails: support@example.com</Box>
          </Box>
        </Box>
      </Box>
      <Box className="contact-right-box">
        <FormControl onClick={handleSubmit}>
          <Box className="form-input-fields">
            <Box>
              <TextField
                label="Your Name"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                label="Your Email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                type="number"
                label="Your Phone"
                required
                value={formData.phone}
                onChange={(e) =>
                  handleChange("phone", parseInt(e.target.value, 10))
                }
              />
            </Box>
          </Box>
          <Box className="text-area">
            <TextareaAutosize
              placeholder="Your Message"
              minRows={8}
              maxRows={16}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </Box>
          <Box className="send-message-btn">
            <Button type="submit">Send Message</Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
}
