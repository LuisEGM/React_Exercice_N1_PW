import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext'
import Logo from '../assets/logo.svg'

const Header = ({ location }) => {

  useEffect(() => {
    let anclas = document.querySelectorAll(".ancla");
    for (let i = 0; i < anclas.length; i++) {
      if (anclas[i].classList.contains("active-custom")) {
        anclas[i].classList.remove("active-custom");
      }
    }
    // eslint-disable-next-line default-case
    switch (location) {
      case "STORE":
        document.querySelector(".store").classList.add("active-custom");
        break;
      case "ABOUT":
          document.querySelector(".about").classList.add("active-custom");
          break;
      case "CART":
        document.querySelector(".cart").classList.add("active-custom");
        break;
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  const { totalItems } = useContext(GlobalContext) 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary" style={{ width: '100%', padding: '0', position: 'fixed', zIndex: '100', boxShadow: '0px 3px 0px 2px black'}}>
      <div className="container-fluid d-flex justify-content-around">
        <div className="d-flex">
          <img className="pt-3" src={Logo} alt="logo" width="60" height="60" />
          <p style={{ fontSize: '1.7rem', marginTop: '1.2rem', color: 'black', fontWeight: 'bold' }} >UNIMAG STORE</p>
        </div>
        <div className="" style={{fontSize: '1rem'}} id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/store" className="nav-link store ancla active-custom">Store
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link about ancla">Acerca de</Link>
            </li>
            <li className="nav-item">
              {totalItems !== 0 ? (<Link className="nav-link cart ancla" to="/cart"> <img alt="carrito" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/> Cart ({ totalItems })*</Link>)
              : (<Link className="nav-link cart ancla" to="/cart"> <img alt="carrito" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/> Cart ({ totalItems })</Link>)}
            </li>
          </ul>
        </div>
        <div>
          <Link className="nav-link" to="/admin/view-products">
            <button className="btn btn-primary">Gestionar catálogo</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
