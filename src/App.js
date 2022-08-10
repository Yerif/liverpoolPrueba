import { Component } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      placeholder: "Buscar Pokemons",
      searchTerm: "",
    };
    this.handler = this.handler.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=150")
      .then((res) => {
        const pokemons = res.data.results;
        this.setState({ pokemons });
        console.log(pokemons);
      })
      .catch((error) => {
        console.warn("Error", error);
      });
  }

  handler(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    return (
      <div className="App">
        <NavBar
          api={this.state.pokemons}
          search={this.state.searchTerm}
          action={this.handler}
          placeholder={this.state.placeholder}
        />
        <Gallery api={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
