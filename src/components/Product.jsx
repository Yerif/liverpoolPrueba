import React, { Component } from "react";
import ImageProduct from "./ImageProduct";
import Price from "./Price";
import TitleProduct from "./TitleProduct";
import axios from "axios";

function Product(props) {
  return (
    <div className="product">
      <ImageProduct image={props.image} />

      <TitleProduct title={props.title} description={props.url} />

      <Price price={props.price} />
    </div>
  );
}

export default Product;
