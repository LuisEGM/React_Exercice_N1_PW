import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from '../context/globalContext'

const ProductItem = ({ product, functionalButtons }) => {

    const { addProductToCarrito, deleteProductToCarrito, updateQuantityProductInCarrito } = useContext(GlobalContext)
    const [activeButtons, setActiveButtons] = useState("")

    useEffect(() => {
        functionalButtons ? setActiveButtons("button-enable") : setActiveButtons("button-disable")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = (e) => {
        if (e.target.name === "button-enable") {
            if (e.target.id === "add") {
                addProductToCarrito(product)
            }
            if (e.target.id === "delete") {
                console.log("entro en delete");
                deleteProductToCarrito(product.id)
            }
        }
    }

  return (
    <div className="modal-dialog" style={{ minWidth: '100%' }} role="document">
        <div className="modal-content">
            <div className="modal-header pb-0 border-0">
                <p>{product.name || "Nombre de prueba"}</p>
            </div>
            <div className="modal-body pt-0">
                <h2 className="modal-title">$ {product.price || "000000"}</h2>
                <img className="card-img-top" height="250" src={product.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sgaglb-AfOqGPKS8iW0qSUk99iflqqneNw&usqp=CAU"} alt="img"/>
            </div>
            <div className="modal-footer border-0">
                <button onClick={handleClick} type="button" id="delete" name={activeButtons} className="btn btn-secondary">Details</button>
                <button onClick={handleClick} type="button" id="add" name={activeButtons} className="btn btn-primary">Add to car</button>
                <button onClick={() => updateQuantityProductInCarrito(product.id, "incrementar")} type="button" className="btn btn-info btn-small">`mas +`</button>
                <button onClick={() => updateQuantityProductInCarrito(product.id, "decrementar")} type="button" className="btn btn-danger btn-small">`menos -`</button>
            </div>
        </div>
    </div>
    );
};

export default ProductItem;
