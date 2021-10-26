import React, { useContext } from "react"
import { VscAdd } from "react-icons/vsc"
import { Link } from "react-router-dom"
import { GlobalContext } from "../context/globalContext"
import ModalEditar from './modalEditar'

const ProductsTable = () => {
  const { products, deleteProduct, setProductEdit } = useContext(GlobalContext);

  return (
    <>
      <div className="container" style={{ padding: "0 5rem" }}>
        <div className="row py-3 d-flex justify-content-between">
          <div className="col-3 p-0">Tiene {products.length} en inventario</div>
          <div className="col-3 p-0">
            <Link to="/admin/add-product">
              <button type="button" class="btn btn-success">
                Agregar producto
                <VscAdd />
              </button>
            </Link>
          </div>
        </div>
        <table class="table table-hover table-bordered table-sm w-100">
          <thead
            style={{
              background: "#161616",
              color: "white",
              border: "1px solid white",
            }}
          >
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Image</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <th scope="row">{p.id}</th>
                <td>{p.name}</td>
                <td>
                  <img src={p.image} height="50" width="50" alt="img" />
                </td>
                <td>$ {p.price}</td>
                <td>
                  <button onClick={() => setProductEdit(p)} name="editar" data-toggle="modal" data-target="#myModal" type="button" className="btn btn-info btn-sm m-1">
                    Editar
                  </button>
                  <button onClick={() => deleteProduct(p.id)} name="eliminar" type="button" className="btn btn-danger btn-sm m-1">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalEditar />
    </>
  );
};

export default ProductsTable;
