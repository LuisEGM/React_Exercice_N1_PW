import React, { useContext } from "react";
import ProductItem from "./productItem";
import { GlobalContext } from '../context/globalContext'

const Products = () => {

  const { products } = useContext(GlobalContext)

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-md-4">
          <p className="pt-3">{products.length} Products</p>
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
      <div className="row px-3">
        {products.map((p, i) => (
          <div key={i} className="col-md-4">
              <ProductItem functionalButtons={true} product={p} />
          </div>
        ))}
        </div>
    </>
  );
};

export default Products;
