import { Component } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import Footer from "./components/Footer";

//componente app que será el componente que mantendra el estado de la aplicacion

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //el primer arreglo se llena con los datos enviados por la api
      characters: [],
      placeholder: "Buscar",
      searchTerm: "",
    };
    this.handler = this.handler.bind(this);
  }

  /* llamada a la api para obtener un arreglo de resultados el cual se hace mediante la libreria axios, tambien se puede 
  utilizar fetch */

  componentDidMount() {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        const characters = res.data.results;
        this.setState({ characters });
        console.log(characters);
      })
      .catch((error) => {
        console.warn("Error", error);
      });
  }

  //funcion para actualizar y manipular el estado de la clase app

  handler(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    return (
      <div className="App">
        <NavBar
          api={this.state.characters}
          search={this.state.searchTerm}
          action={this.handler}
          placeholder={this.state.placeholder}
        />
        <h2 className="subtitle">Lista de personajes</h2>
        <Gallery search={this.state.searchTerm} api={this.state.characters} />
        <Footer />
      </div>
    );
  }
}

export default App;
