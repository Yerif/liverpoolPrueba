import axios from "axios";
import React, { Component } from "react";
import NavBar from "./NavBar";
import Product from "./Product";

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  createProduct(pokemon) {
    return (
      <Product
        key={pokemon.name}
        image={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yhCYwpeKOucdN1LaFmijvgAAAA%26pid%3DApi&f=1"
        }
        url={pokemon.url}
        title={pokemon.name}
        price="$3,000"
      />
    );
  }

  render() {
    return (
      <div className="gallery">{this.props.api.map(this.createProduct)}</div>
    );
  }
}

export default Gallery;
