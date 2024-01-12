import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Popover from "@mui/material/Popover";
import { ReactComponent as OrderIcon } from "../../../assets/icons/icon-order.svg";
import { ReactComponent as CancelationIcon } from "../../../assets/icons/icon-cancel.svg";
import { ReactComponent as ReviewsIcon } from "../../../assets/icons/Icon-Reviews.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/Icon-logout.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const HeaderLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Sign Up",
      link: "/sign-up",
    },
  ];

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 5,
      top: 6,
      border: `1px solid #fff`,
      padding: "0 4px",
    },
  }));

  const navigate = useNavigate();
  const redirectToCart = () => {
    navigate("/cart");
  };

  const redirectToAccount = () => {
    navigate("/account");
  };

  return (
    <Box component="div" className="main-header-container">
      <Box component="h4" className="batteries-heading">
        Batteries.Store
      </Box>
      <Box component="div" className="header-nav-links">
        {HeaderLinks.map(({ name, link }) => (
          <Link key={name} to={link}>
            <Box component="span">{name}</Box>
          </Link>
        ))}
      </Box>
      <Box component="div" className="input-container">
        <Box>
          <TextField
            style={{ background: "#f5f5f5" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
            placeholder="What are you looking for?"
          />
        </Box>
        <Box onClick={redirectToCart}>
          <IconButton>
            <StyledBadge badgeContent={1} color="error">
              <ShoppingCartOutlinedIcon />
            </StyledBadge>
          </IconButton>
        </Box>
        <Box className="user-icon-btn">
          <IconButton onClick={handleClick}>
            <PersonOutlinedIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box className="popover-container ">
              <Box className="popover-icons">
                <Box>
                  <UserIcon />
                </Box>
                <Box>
                  <OrderIcon />
                </Box>
                <Box>
                  <CancelationIcon />
                </Box>
                <Box>
                  <ReviewsIcon />
                </Box>
                <Box>
                  <LogoutIcon />
                </Box>
              </Box>
              <Box className="popover-text">
                <Box onClick={redirectToAccount}>Manage My Account</Box>
                <Box>My Order</Box>
                <Box>My Cancellations</Box>
                <Box>My Reviews</Box>
                <Box>Logout</Box>
              </Box>
            </Box>
          </Popover>
        </Box>
      </Box>
    </Box>
  );
}
