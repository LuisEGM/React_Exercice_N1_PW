import React, { useContext, useState, useEffect } from "react";
import ProductItem from "./productItem";
import { GlobalContext } from '../context/globalContext'

const Products = () => {

  const [busqueda, setBusqueda] = useState(false)
  const [match, setMatch] = useState("")
  const { products, productsFilter, updateProductList } = useContext(GlobalContext)
  const [productsToList, setProductsToList] = useState([])

  const handleChange = e => {
    setMatch(e.target.value)
    updateProductList(e.target.value)
    setBusqueda(e.target.value !== "")
  }

  useEffect(() => {
    setProductsToList(productsFilter)      
  }, [products, productsFilter])
  
  useEffect(() => {
    setProductsToList(products)      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function mostrarResultadoDeBusqueda() {
    console.log(busqueda);
    if (busqueda && productsFilter.length === 0) {
      return <p className="pt-3">Resultados de la busqueda: {productsFilter.length} </p>;
    }
    else if (busqueda && productsFilter.length !== 0) {
      return <p className="pt-3">Resultados de la busqueda: {productsFilter.length} </p>;

    }
    else {
      return <p className="pt-3">{products.length} productos en catálogo </p>;
    }
  }

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-md-4">
          {mostrarResultadoDeBusqueda()}
        </div>
        <div className="col-md-4">
          <form className="">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
              onChange={handleChange}
              value={match}
            />
          </form>
        </div>
      </div>
      <div className="row px-3">
        {productsToList.map((p, i) => (
          <div key={i} className="col-md-4">
              <ProductItem functionalButtons={true} product={p} />
          </div>
        ))}
        </div>
    </>
  );
};

export default Products;
