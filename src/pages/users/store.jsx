import React from 'react';
import Header from '../../components/header';
import Products from '../../components/products';

const Store = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row text-center" style={{ paddingTop: '4rem' }} >
                    <h1 style={{fontSize: 45}}>STORE</h1>
                    <p style={{fontSize: 20}} >This is the product catalog</p>
                </div>
                <Products />
            </div>
        </>
    )
}

export default Store;
