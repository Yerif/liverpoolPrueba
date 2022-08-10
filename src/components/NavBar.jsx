import React, { Component } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

//componente de la Barra de Navegación

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Logo />
        <SearchBar
        //props para la barra de busqueda
          api={this.props.api}
          placeholder={this.props.placeholder}
          action={this.props.action}
          search={this.props.search}
        />
      </nav>
    );
  }
}

export default NavBar;
