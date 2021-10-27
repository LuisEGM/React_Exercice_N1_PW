import React, { useContext, useEffect } from "react";
import FormProduct from "../../components/formProduct";
import ProductItem from "../../components/productItem";
import { GlobalContext } from "../../context/globalContext";
import HeaderTest from "../../components/headerTest";

const AddProduct = () => {
  const { changeProductName, changeImage, changePrice, price, productName, image } = useContext(GlobalContext);

  useEffect(() => {
    changeProductName("")
    changeImage("")
    changePrice(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HeaderTest />
      <div className="row text-center py-5 w-100">
        <h1 style={{ fontSize: 35 }}>Add product</h1>
        <p style={{ fontSize: 20 }}>
          Complete el formulario para agregar un nuevo producto
        </p>
      </div>
      <div className="row d-flex w-100 justify-content-around">
        <div className="col-md-4 ">
          <FormProduct type={"crear"} />
        </div>
        <div className="col-md-4">
          <ProductItem price={price} name={productName} image={image} />
        </div>
      </div>
    </>
  );
};

export default AddProduct;
