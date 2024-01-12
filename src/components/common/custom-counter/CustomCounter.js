import { Box, Button } from "@mui/material";
import { AddRounded, RemoveRounded } from "@mui/icons-material";
import styled from "@emotion/styled";
import "./CustomCounter.css";

export default function CustomCounter({
  quantity,
  handleIncrement,
  handleDecrement,
  disableDec,
}) {
  return (
    <Box className="quantity">
      <Box className="qty-heading">Qty</Box>
      <Box className="icon">
        <Button
          className="icon"
          onClick={handleDecrement}
          disabled={disableDec}
        >
          <RemoveRounded className="color-black" />
        </Button>
      </Box>
      <span className="counter-value">{quantity}</span>
      <Box className="icon">
        <Button className="icon" onClick={handleIncrement}>
          <AddRounded />
        </Button>
      </Box>
    </Box>
  );
}
