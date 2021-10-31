import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext'

const Header = () => {

  const { totalItems } = useContext(GlobalContext) 

  return (
    <ul className="nav justify-content-center" style={{ width: '100%', left: 0, top: 0, position: 'fixed', height: '3rem', backgroundColor: 'white', paddingTop: '.2rem', zIndex: '100'}} >
      <li className="nav-item">
        <Link className="nav-link" to="/">Store</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cart"> <img alt="carrito" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/> Cart ({ totalItems })</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/view-products">vista administrador</Link>
      </li>
    </ul>
  );
};

export default Header;
