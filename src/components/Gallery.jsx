import axios from "axios";
import React, { Component } from "react";
import NavBar from "./NavBar";
import Product from "./Product";

//componente clase que despliega la galeria de productos

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  //funcion para crear el componente que mostrara el producto con su información.

  createProduct(character) {
    return (
      <Product
        key={character.name}
        image={`./images/${character.name}`}
        hair={character.hair_color}
        gender={character.gender}
        birthyear={character.birth_year}
        title={character.name}
        price={character.mass}
        height={character.height}
      />
    );
  }

  render() {
    return (
      //desplegar todos los productos utilizando la api mediante el metodo map
      <div className="gallery">
        {this.props.api
          .filter((val) => {
            const search = this.props.search;
            if (search == "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              //se utiliza search para llegar al estado del componente padre
              console.log(val);
              return val;
            }
          })
          .map(this.createProduct)}
      </div>
    );
  }
}

export default Gallery;
