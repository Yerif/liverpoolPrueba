import React, { Component } from "react";

//componente para definir el titulo del producto.

function TitleProduct(props) {
  return (
    <div className="title">
      <h2>{props.title}</h2>
      <p> Altura: {props.height}</p>
      <p> Año de nacimiento: {props.birthyear}</p>
      <p> Genero: {props.gender}</p>
      <p> Color de cabello: {props.hair}</p>
    </div>
  );
}

export default TitleProduct;
