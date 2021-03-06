import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch} from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import { authenticate } from "./store/session";
import HomePage from './components/homePage/HomePage'
import Navbar from './components/navbar/Navbar'
import ProfilePage from './components/profilePage/ProfilePage'
import CheckoutPage from './components/checkout/CheckoutPage'
import Products from './components/product/Products'
import Product from './components/product/Product'
import OrderSummary from './components/orderSummary/OrderSummary'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import CategoryNav from './components/categoryNav/CategoryNav'
import ThankYou from './components/checkout/ThankYou'




function App() {
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
      <CategoryNav />
      <Navbar />
      <Switch>
        <Route path="/" exact >
          <HomePage />
        </Route>
        <Route path="/MyAccount" exact >
          <ProfilePage />
        </Route>

        <Route path="/about" exact >
          <About />
        </Route>

        <ProtectedRoute path="/users/:userId" exact >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/checkout" exact>
          <CheckoutPage />
        </ProtectedRoute>
          <Route path="/thankyou" exact>
          <ThankYou/>
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id" exact>
        <Product />
        </Route>
        <Route path="/confirmation" exact>
          <OrderSummary />
        </Route>
         <Route path="/categories/:id" exact >
          <Products />
        </Route>




      </Switch>
      <Footer />


    </BrowserRouter>
  );
}

export default App;
