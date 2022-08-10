import React, { Component } from "react";

function TitleProduct(props) {
  return (
    <div className="title">
      <h2>{props.title}</h2>
      <p> {props.description}</p>
    </div>
  );
}

export default TitleProduct;
