import React, { useState } from "react";
import "./Product.css";

function Product(props) {
  const { data, count } = props
  
  return (
    <>
      <div className="container">

        <h3>{count} Product found</h3>

        <div className="row">{data}</div> 

      </div>
    </>
  );
}

export default Product;
