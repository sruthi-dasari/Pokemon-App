import "./index.css";

import { Component } from "react";

class Home extends Component {
  state = {
    pokemonData: [],
  };

  componentDidMount() {
    this.getPokemonData();
  }

  getPokemonData = async () => {
    // const header = new Headers({ "Access-Control-Allow-Origin": "*" });

    const url = "https://pokeapi.co/";

    const response = await fetch(url);

    console.log(response);
  };

  render() {
    return (
      <div className="home-container">
        {/* <img src="" /> */}
        <h1 className="subtitle">Click the cards to see more detail</h1>
        {/* <div className="pokemon-cards-container"></div> */}
      </div>
    );
  }
}

export default Home;
