import React from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "../components/home/Home";
import Products from "../components/products/Products";
import Contact from "../components/contacts/Contact";
import About from '../components/about/About';

function Header() {
  return (
    <div>
    <h1>Abhi Granites Inc.</h1>
    <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </ul>
    <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
    </div>
</div>
  );
}
export default Header;