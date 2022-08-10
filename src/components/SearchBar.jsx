import React, { Component } from "react";
import { Link } from "react-router-dom";

//componente de la barra de busqueda

function SearchBar(props) {
  //definir como variable el elemento search que es un prop que viene de el estado de la clase padre App
  const search = props.search;

  return (
    <div className="searchBar">
      <div className="inputBox">
        <input
          //definir el input con los props que vienen de un componente padre
          placeholder={props.placeholder}
          type="text"
          onChange={(e) => {
            props.action(e.target.value);
            console.log(search);
          }}
        />
      </div>
      {/* caja de texto predictivo para mostrar los articulos correspondientes a
      lo que se escribio en el input */}
      <div className="predict">
        {props.api
          .filter((val) => {
            //se filtra dentro de la api solo los resultados que coinciden
            if (search == "") {
              return null;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              //se utiliza search para llegar al estado del componente padre
              console.log(val);
              return val;
            }
          })
          .map((val) => {
            //mediante el metodo map se muestra en la caja predictiva los nombres que coinciden
            return (
              <div className="autocomplete" key={val.name}>
                <p>{val.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchBar;
