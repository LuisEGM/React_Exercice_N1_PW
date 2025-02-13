import React, { useEffect, useContext, useState } from "react";
import ProductsTable from "../../components/productsTable";
import HeaderAdmin from "../../components/headerAdmin";
import { GlobalContext } from '../../context/globalContext';
import { getAll } from '../../services/productServices';
import Loader from '../../components/loader';
import { ToastContainer, toast } from 'react-toastify';

const ViewProducts = () => {
  
  const { loadProducts, toastInfo, changeToastInfo } = useContext(GlobalContext);
  const [loader, setLoader] = useState(true);
  const [reloadTrigger, setReloadTrigger] = useState(true);

  //Para ejecucion del toast
  useEffect(() => {
    if (toastInfo !== "") {
      let info = toastInfo.split("-");
      // eslint-disable-next-line default-case
      switch (info[0]) {
        case "info":
          toast.info(info[1], {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          break;
        case "warn":
          toast.warn(info[1], {
            theme: "colored",
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          break;
      }  
      changeToastInfo("");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[toastInfo]);

  useEffect(() => {
      (async () => {
          try {
              const result = await getAll();
              setLoader(false)
              loadProducts(result.data);
              console.log("Data fetch admin", result.data);
          } catch (error) {
              console.log(error);            
          }
      })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[reloadTrigger])
  
  return (
    <>
      <HeaderAdmin />
      <div className="row text-center w-100" style={{ paddingTop: '7rem' }} >
        <h1 style={{ fontSize: 35 }}>Gestión de productos</h1>
        <p style={{ fontSize: 20 }}>Desde aquí podrá gestionar los productos del catálogo</p>
      </div>
      { !loader ? (
        <div className="row text-center w-100" style={{ paddingTop: '1rem' }} >
          <ProductsTable reloadTriggerFunction={setReloadTrigger} reloadTriggerValue={reloadTrigger}  />
        </div>
      ) : (<Loader />)}
      <ToastContainer/>
    </>
  );
};

export default ViewProducts
