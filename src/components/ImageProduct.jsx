import React from "react";

function ImageProduct(props) {
  return (
    <div className="image">
      <img
        className="productImage"
        src={props.image}
        width={200}
        height={350}
      />
    </div>
  );
}

export default ImageProduct;
