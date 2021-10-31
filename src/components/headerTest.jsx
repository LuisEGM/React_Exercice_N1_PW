import React from "react";
import { Link } from 'react-router-dom'

const HeaderTest = () => {
  return (
    <ul className="nav justify-content-center" style={{ width: '100%', left: 0, top: 0, position: 'fixed', height: '3rem', backgroundColor: 'white', paddingTop: '.2rem', zIndex: '100'}} >
      <li className="nav-item">
        <Link className="nav-link" to="/products">Vista de usuario</Link>
      </li>
    </ul>
  );
};

export default HeaderTest;
