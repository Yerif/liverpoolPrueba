import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

//componente para precios

function Price(props) {
  return (
    <div className="priceBox">
      <p className="price">Precio: ${props.price}.00</p>
    </div>
  );
}

export default Price;
