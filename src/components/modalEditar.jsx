import React, { useContext } from "react"
import FormProduct from "../components/formProduct"
import ProductItem from "../components/productItem"
import { GlobalContext } from '../context/globalContext'

const ModalEditar = () => {

    const { price, productName, image, updateProduct } = useContext(GlobalContext);
    
  return (
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar producto</h5>
          </div>
          <div class="modal-body">
            <div className="row d-flex justify-content-around">
              <FormProduct type={"editar"} />
              <ProductItem price={price} name={productName} image={image} />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button onClick={() => updateProduct()} data-dismiss="modal" type="button" class="btn btn-primary">
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditar;
