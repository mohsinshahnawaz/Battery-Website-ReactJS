import * as React from "react";
import "./Cart.css";
import {
  Box,
  Card,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  CardContent,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
import CustomInputNumber from "../../common/custom-input-number/CustomInput";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const products = [
    {
      id: 1,
      name: "Osaka Battery",
      price: "113,000.00",
      img: "/battery.svg",
      cancel: "/cancel.svg",
    },
    {
      id: 2,
      name: "Taushiba battery",
      price: "126,000.00",
      img: "/li-ion-battery.svg",
      cancel: "/cancel.svg",
    },
  ];
  const columnWidths = {
    product: "20%",
    price: "20%",
    quantity: "1%",
    subtotal: "20%",
  };
  const [quantities, setQuantities] = React.useState({});
  // const [value, setValue] = React.useState();
  const [couponCode, setCouponCOde] = React.useState("");
  const navigate = useNavigate();
  const handleQuantityChange = (productId, newValue) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newValue,
    }));
  };
  const calculateTotals = () => {
    let subTotal = 0;
    products.forEach((product) => {
      const totalCost = parseFloat(product.price.replace(/,/g, ""));
      const quantity = quantities[product.id] || 0;
      subTotal += totalCost * quantity;
    });

    const shipping = 0;
    const total = subTotal + shipping;

    return {
      subTotal: subTotal.toLocaleString(),
      shipping: shipping.toLocaleString(),
      total: total.toLocaleString(),
    };
  };

  const { subTotal, shipping, total } = calculateTotals();
  return (
    <Box className="card-container">
      <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "40px 0px" }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>

        <Typography color="text.primary">Cart</Typography>
      </Breadcrumbs>
      <Card className="cart-details">
        <TableContainer>
          <Table className="" id="super-product-table">
            <TableHead>
              <TableRow className="data-row">
                <TableCell style={{ width: columnWidths.product }}>
                  Product
                </TableCell>
                <TableCell align="center" style={{ width: columnWidths.price }}>
                  Price
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: columnWidths.quantity }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: columnWidths.subtotal }}
                >
                  Subtotal
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => {
                const totalCost = parseFloat(product.price.replace(/,/g, ""));
                const quantity = quantities[product.id] || 0;
                const subTotal = totalCost * quantity;

                return (
                  <TableRow
                    style={{
                      boxShadow: " -1px -1px 9px 3px rgba(255,255,255,0.65)",
                    }}
                    key={product.id}
                    className="data-row"
                    // className={product.id % 2 === 0 ? "even" : "odd"}
                  >
                    <TableCell style={{ width: columnWidths.product }}>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <img
                          src={product?.cancel}
                          alt="img"
                          onClick={() => {}}
                          style={{ cursor: "pointer" }}
                        />
                        <img src={product?.img} alt="img" />
                        <span>{product.name}</span>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ width: columnWidths.price }}
                    >
                      <span className="">${product.price}</span>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ width: columnWidths.quantity }}
                    >
                      <CustomInputNumber
                        // value={value}
                        setValue={(newValue) =>
                          handleQuantityChange(product.id, newValue)
                        }
                      />
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ width: columnWidths.subtotal }}
                    >
                      <span className="">${subTotal.toLocaleString()}</span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Box className="return-shop">
        <Button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Return To Shop
        </Button>
      </Box>
      <Box className="coupon-code">
        <Box>
          <TextField
            label="Coupon Code"
            value={couponCode}
            onChange={(e) => {
              setCouponCOde(e.target.value);
            }}
          />
        </Box>
        <Box className="apply-Coupon-btn">
          <Button disabled={couponCode.length < 1}>Apply Coupon</Button>
        </Box>
      </Box>

      <Box className="cart-total">
        <Card
          sx={{
            width: "470px",
            border: "2px solid #000",
            height: "260",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Cart Total
            </Typography>
            <Box className="card-total">
              <span>SubTotal:</span>
              <span>${subTotal}</span>
            </Box>
            <Box className="card-total">
              <span>Shipping:</span>
              <span>${shipping}</span>
            </Box>
            <Box className="card-total" style={{ border: "none" }}>
              <span>Total:</span>
              <span>${total}</span>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Cart;
