import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import { loadStripe, stripe } from "@stripe/stripe-js";
import HomePage from './components/homePage/HomePage'
import { Elements } from "@stripe/react-stripe-js";
import Stripe from './components/checkout/Stripe'
import Navbar from './components/navbar/Navbar'
import ProfilePage from './components/profilePage/ProfilePage'
import CheckoutPage from './components/checkout/CheckoutPage'
import Header from './components/header/Header'
import ProductCard from './components/product/ProductCard'
import Products from './components/product/Products'
import Product from './components/product/Product'
import OrderSummary from './components/orderSummary/OrderSummary'
import ItemDetail from './components/orderSummary/ItemDetail'
import './index.css'

const promise = loadStripe("pk_test_51Iws9eDTZpv1JDZFarzSyEF2nqq9xenWCwbILooHMNrAgUCCN2WIATjKHDFiEZVqkqHUeiLsRzcV786iA4H9blPJ00yOk7hdYb");

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <NavBar />
      <Header />
      <Switch>
        <Route path="/" exact={true} >
          <HomePage />
        </Route>
        <Route path="/MyAccount" exact={true} >
          <ProfilePage />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users/:userId" exact >
          <User />
        </ProtectedRoute>
        <Route path="/checkout" exact>
          <CheckoutPage />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id">
        <Product />
        </Route>
        <Route path="/confirmation">
          <OrderSummary />


        </Route>

      </Switch>


    </BrowserRouter>
  );
}

export default App;
