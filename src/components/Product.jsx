import React, { Component } from "react";
import ImageProduct from "./ImageProduct";
import Price from "./Price";
import TitleProduct from "./TitleProduct";

//componente que creara las cajas del producto con imagen titulo y precio

function Product(props) {
  return (
    <div className="product">
      <ImageProduct image={props.image} />

      <TitleProduct title={props.title} height={props.height} birthyear={props.birthyear} gender= {props.gender} hair= {props.hair}/>

      <Price price={props.price} />
    </div>
  );
}

export default Product;
