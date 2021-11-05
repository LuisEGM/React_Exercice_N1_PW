import React from "react";
import ProductsTable from "../../components/productsTable";
import HeaderTest from "../../components/headerTest";

const ViewProducts = () => {
  return (
    <>
      <HeaderTest />
      <div className="row text-center w-100" style={{ paddingTop: '4rem' }} >
        <h1 style={{ fontSize: 35 }}>View products</h1>
        <p style={{ fontSize: 20 }}>Esta sera una lista de los productos</p>
        <ProductsTable />
      </div>
    </>
  );
};

export default ViewProducts
