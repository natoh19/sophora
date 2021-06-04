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
import { loadStripe } from "@stripe/stripe-js";
import HomePage from './components/homePage/HomePage'
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './components/checkout/CheckoutForm'
import Navbar from './components/navbar/Navbar'
import ProfilePage from './components/profilePage/ProfilePage'
import CheckoutPage from './components/checkout/CheckoutPage'
import Header from './components/header/Header'
import ProductCard from './components/product/ProductCard'
import Products from './components/product/Products'
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
  }, []);

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
          <Elements stripe={promise}>
          <CheckoutForm />
          </Elements>
        </Route>
        <Route path="/order" exact>
          <CheckoutPage />
        </Route>
        <Route path="/productcard" exact>
          <ProductCard />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        {/* <Route path="/products/:id">
        <Product />

        </Route> */}

      </Switch>


    </BrowserRouter>
  );
}

export default App;
