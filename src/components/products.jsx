import React from 'react';
import { productsInfo } from '../utils/productsInfo'
import ProductItem from './productItem';

const Products = () => {
    return (
        <>
            <div className="row justify-content-between px-3">
                <div className="col-md-4">
                    <p className="pt-3">10 Products</p>
                </div>
                <div className="col-md-4">
                    <form className="">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    </form>
                </div>
            </div>
            <div className="row px-4">
                {
                    productsInfo.map((p, i) => <ProductItem product={p} key={i}/>)
                }
            </div>
        </>
    )
}

export default Products;
