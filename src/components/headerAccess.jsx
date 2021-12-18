import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.svg'

const HeaderAccess = () => {
    return (
        <nav style={{ width: '100%', position: 'fixed', padding: '0', zIndex: 100, background: 'white', boxShadow: '0px 3px 0px 2px black'}}>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img className="pt-3" src={Logo} alt="logo3" width="60" height="60" />
                        <p style={{ fontSize: '1.7rem', marginTop: '1.3rem', color: 'black', fontWeight: 'bold' }} >UNIMAG STORE</p>
                    </div>
                    <Link to="/store">
                        <img className="mt-3" src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png" alt="Circled" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default HeaderAccess
