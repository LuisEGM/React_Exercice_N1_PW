import React from 'react'

const ProductItem = ({ product }) => {
    return (
        <div className="col-sm-4">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header pb-0 border-0">
                        <p>{product.name}</p>
                    </div>
                    <div className="modal-body pt-0">
                        <h2 className="modal-title">$ {product.price}</h2>
                    </div>
                    <div className="modal-footer border-0">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Details</button>
                        <button type="button" className="btn btn-primary">Add to car</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
