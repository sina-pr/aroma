import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Product from "./components/Product";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import CheckOut from "./components/CheckOut";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verfyToken } from "./slices/user";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let Token = localStorage.getItem("user");
    dispatch(verfyToken({ Token }));
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <CheckOut />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
