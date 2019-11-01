import React, { Component } from "react";
import "./App.css";
import Drinks from "./Components/ListDrinks";
import MapDrinks from "./Components/MapDrinks";

class App extends Component {
  state = {
    drinkArray: [],
    urbanWord: []
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

  getDrinkUrban = async e => {
    const urbanName = e.target.elements.urbanName.value;
    e.preventDefault();
    const callAPI = await fetch(
      `http://api.urbandictionary.com/v0/define?term=${urbanName}`
    );
    const dataWord = await callAPI.json();
    this.setState({ urbanWord: dataWord.list });
    {
      this.drinkArray.map(urbanWord => {
        return <div className="Article-title">{urbanWord.definition}</div>;
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drink Search</h1>
        </header>

        <p className="App-title">{this.state.urbanWord}</p>

        <Drinks getDrink={this.getDrink} />

        <MapDrinks drinkArray={this.state.drinkArray} />
      </div>
    );
  }
}

export default App;
