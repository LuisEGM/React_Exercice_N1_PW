import React from 'react';
import Header from '../components/header';
import Products from '../components/products';

const Store = () => {
    return (
        <>
            <Header />
            <div className="row text-center pt-5">
                <h1 style={{fontSize: 45}}>STORE</h1>
                <p style={{fontSize: 20}} >This is the Store Page</p>
            </div>
            <Products />
        </>
    )
}

export default Store;
