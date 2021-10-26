import React, { useContext } from "react";
import ProductItem from "./productItem";
import { GlobalContext } from '../context/globalContext'

const Products = () => {

  const { products } = useContext(GlobalContext)

  return (
    <>
      <div className="row justify-content-between px-3">
        <div className="col-md-4">
          <p className="pt-3">10 Products</p>
        </div>
        <div className="col-md-4">
          <form className="">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
      <div className="row px-4">
        {products.map((p, i) => (
          <div className="col-sm-4">
              <ProductItem name={p.name} price={p.price} image={p.image} key={i} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
