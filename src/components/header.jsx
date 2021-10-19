import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/">Store</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cart"> <img alt="carrito" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/> Cart (0)</Link>
      </li>
    </ul>
  );
};

export default Header;
