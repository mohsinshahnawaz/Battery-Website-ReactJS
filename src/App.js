import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import RoutesComponents from "./routes";
import { Box } from "@mui/material";
function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            Loading...
          </Box>
        }
      >
        <RoutesComponents />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
