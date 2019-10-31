import React, { Component } from "react";

import "./App.css";

import Drinks from "./Components/ListDrinks";

import MapDrinks from "./Components/MapDrinks";
// import MapRandomDrink from "./Components/MapRandomDrink";
// import Random from "./Components/Random";
import { Link } from "react-router-dom";
// import RandomDrinkDetails from "/Components/RandomDrinkDetails";

class App extends Component {
  state = {
    drinkArray: []
  };
  getDrink = async e => {
    const drinkName = e.target.elements.drinkName.value;

    e.preventDefault();
    const getAPI = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    );

    const data = await getAPI.json();

    this.setState({ drinkArray: data.drinks });
    console.log(this.state.drinkArray);
  };
  // getRandomDrink = async e => {
  //   e.preventDefault();
  //   const getRandomAPI = await fetch(
  //     `https://www.thecocktaildb.com/api/json/v2/1/randomselection.php`
  //   );

  //   const randomData = await getRandomAPI.json();

  //   this.setState({ randomDrinkArray: randomData.drinks });
  //   console.log(this.state.randomDrinkArray);
  // };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drink Search</h1>
        </header>
        {/* <button className="drinkButton" style={{ marginBottom: "2rem" }}>
          <Link to="Components/Random">Random Drinks</Link>
        </button> */}

        <Drinks getDrink={this.getDrink} />
        {/* <Random getRandomDrink={this.getRandomDrink} /> */}
        <MapDrinks drinkArray={this.state.drinkArray} />
        {/* <MapRandomDrink randomDrinkArray={this.state.randomDrinkArray} /> */}
      </div>
    );
  }
}

export default App;
