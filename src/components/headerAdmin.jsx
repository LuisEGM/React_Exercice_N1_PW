import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const HeaderTest = () => {

    const { logout } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            const user = JSON.parse(localStorage.getItem("user"));
            setUserInfo({
                nombre: user.nombre,
                avatar: user.avatar
            })
        }
    }, [])

  return (
    <nav style={{ width: '100%', background: 'white', position: 'fixed', padding: '0', zIndex: '100', boxShadow: '0px 3px 0px 2px black'}}>
        <div className="container">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <img className="mt-2 rounded border rounded-circle" src={userInfo.avatar} alt="logo3" width="60" height="60" />
                    <p style={{ fontSize: '1.5rem', margin: '1.3rem 0 0 1rem', color: 'black', fontWeight: 'bold' }} >Hola, {userInfo.nombre}. </p>
                </div>
                <div className="d-flex">
                    <Link className="nav-link" to="/store">
                        <button className="btn btn-primary mt-2">Vista de tienda</button>
                    </Link>
                    <Link className="nav-link" to="/store">
                        <button onClick={() => logout()} className="btn btn-danger mt-2">Cerrar sesión</button>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
)
};

export default HeaderTest;
