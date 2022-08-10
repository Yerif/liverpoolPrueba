import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

function Price(props) {
  return (
    <div className="priceBox">
      <p className="price">{props.price}</p>
    </div>
  );
}

export default Price;
