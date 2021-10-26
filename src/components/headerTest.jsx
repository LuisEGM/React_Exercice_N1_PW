import React from "react";
import { Link } from 'react-router-dom'

const HeaderTest = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/products">Vista de usuario</Link>
      </li>
    </ul>
  );
};

export default HeaderTest;
