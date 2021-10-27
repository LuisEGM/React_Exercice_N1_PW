import React, { useContext } from "react"
import FormProduct from "../components/formProduct"
import ProductItem from "../components/productItem"
import { GlobalContext } from '../context/globalContext'

const ModalEditar = () => {

    const { price, productName, image, updateProduct } = useContext(GlobalContext);
    
  return (
    <div
      className="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar producto</h5>
            <button className="btn btn-danger close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
          </div>
          <div className="modal-body">
            <div className="row d-flex justify-content-around">
              <FormProduct type={"editar"} />
              <ProductItem price={price} name={productName} image={image} />
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={() => updateProduct()} data-dismiss="modal" type="button" className="btn btn-info" style={{width: '100%'}}>
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditar;
