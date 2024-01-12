import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/home"));
export const LoginPage = lazy(() => import("../pages/login"));
export const SignUpPage = lazy(() => import("../pages/sign-up"));
export const AboutPage = lazy(() => import("../pages/about"));
export const ContactPage = lazy(() => import("../pages/contact"));
export const CartPage = lazy(() => import("../pages/cart"));
export const PageNotFoundPage = lazy(() => import("../pages/404page"));
export const AccountPage = lazy(() => import("../pages/account"));
export const CheckOutPage = lazy(() => import("../pages/checkout"));
export const BatteriesPage = lazy(() => import("../pages/batteries-details"));
