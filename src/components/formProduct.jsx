import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";

const FormProduct = ({ type }) => {
  // const [productName, setProductName] = useState("Nombre de inicial");
  // const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sgaglb-AfOqGPKS8iW0qSUk99iflqqneNw&usqp=CAU");
  // const [price, setPrice] = useState(0);

  const { addProduct, changePrice, changeImage, changeProductName, price, productName, image } = useContext(GlobalContext);

  const handleChange = (e) => {
    if (e.target.name === "productName") {
        // setProductName(e.target.value)
        changeProductName(e.target.value)
    }
    if (e.target.name === "image") {
        // setImage(e.target.value)
        changeImage(e.target.value)
    }
    if (e.target.name === "price") {
        // setPrice(parseInt(e.target.value))
        changePrice(parseInt(e.target.value))
    }
  };

  const handleClick = (e) => {
    addProduct({ name: productName, price: price, image: image });
    changeProductName("Nombre de inicial")
    changePrice(0)
    changeImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sgaglb-AfOqGPKS8iW0qSUk99iflqqneNw&usqp=CAU")
  };

  return (
    <form className="m-2">
      <div className="form-group mb-3">
        <label htmlFor="productName">Name</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="productName"
          name="productName"
          placeholder="Product name"
          value={productName}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="image">Image-url</label>
        <div className="input-group">
          <input
            onChange={handleChange}
            id="image"
            name="image"
            type="url"
            className="form-control"
            placeholder="https://"
            value={image}
          />
        </div>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="price">Price</label>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input
            onChange={handleChange}
            id="price"
            name="price"
            type="number"
            className="form-control"
            value={price}
          />
          <span className="input-group-text">.00</span>
        </div>
      </div>
      {type === "crear" && <Link to="/admin/view-products">
        <button
          onClick={handleClick}
          className="btn btn-info mb-3"
          style={{ width: "100%" }}
        >
          Añadir producto
        </button>
      </Link>}
    </form>
  );
};

export default FormProduct;
