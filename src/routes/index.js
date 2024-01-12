// import React from "react";
import { Routes, Route } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  HomePage,
  LoginPage,
  SignUpPage,
  AboutPage,
  ContactPage,
  PageNotFoundPage,
  CartPage,
  AccountPage,
  CheckOutPage,
  BatteriesPage,
} from "./lazyPages";
import Header from "../components/pages/header/Header";
import Footer from "../components/pages/footer/Footer";
import Sale from "../components/pages/Sale/Sale";
export default function RoutesComponents() {
  return (
    <>
      <Sale />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="*" element={<PageNotFoundPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="batteries-details" element={<BatteriesPage />} />
      </Routes>
      <Footer />
    </>
  );
}
