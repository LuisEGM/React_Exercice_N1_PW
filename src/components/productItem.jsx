import React from "react";

const ProductItem = ({ name, price, image }) => {
  return (
    <div className="modal-dialog" style={{ minWidth: '100%' }} role="document">
        <div className="modal-content">
            <div className="modal-header pb-0 border-0">
                <p>{name || "Nombre de prueba"}</p>
            </div>
            <div className="modal-body pt-0">
                <h2 className="modal-title">$ {price || "000000"}</h2>
                <img class="card-img-top" height="250" src={image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sgaglb-AfOqGPKS8iW0qSUk99iflqqneNw&usqp=CAU"} alt="img"/>
            </div>
            <div className="modal-footer border-0">
                <button type="button" className="btn btn-secondary">Details</button>
                <button type="button" className="btn btn-primary">Add to car</button>
            </div>
        </div>
    </div>
    );
};

export default ProductItem;
