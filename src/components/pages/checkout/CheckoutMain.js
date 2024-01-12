import { Box } from "@mui/material";
import CheckOutLeft from "./CheckoutLeft/CheckOutLeft";
import "./CheckoutMain.css";
import CheckoutRight from "./CheckoutRight/CheckoutRight";
export default function CheckoutMain() {
  return (
    <Box className="checkout-main-container">
      <Box>
        <CheckOutLeft />
      </Box>
      <Box>
        <CheckoutRight />
      </Box>
    </Box>
  );
}
