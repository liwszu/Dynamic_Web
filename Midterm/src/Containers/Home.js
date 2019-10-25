import React, { useEffect, useState } from "react";
import axios from "axios";

import alphabet from "../SiteData/AlphabetData";
import MapLetter from "./Components/MapLetter";

export default function Home(props) {
  const [letter, setLetter] = useState({});
  const routeId = props.match.params.id;
  const [cocktail, setCocktail] = useState("");
  const [cocktailList, setCocktailList] = useState([]);
  const [error, isError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, isSuccess] = useState(false);

  useEffect(() => {
    for (let i = 0; i < alphabet.length; i++) {
      console.log(alphabet.length[i]);

      if (alphabet[i] === routeId) {
        setLetter(`${alphabet[i]}`);
      } else {
        console.log("yeeeeeeeeeeeeet");
      }
    }
  }, []);

  function queryDrinkAPI(queryDrink) {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${setLetter}`
      )
      .then(function(response) {
        console.log("response", response);

        if (response.status !== 200) {
          isError(true);
          setErrorMessage(`${response.status} : ${"Error"}`);
        } else {
          isSuccess(true);
        }

        setCocktailList(response);
        return response;
      })
      .catch(function(error) {
        console.log("error", error);
        return error;
      });
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(props.location.search);
    const alphabetParam = urlParams.get(letter) ? urlParams.get(letter) : "";
    setLetter(alphabetParam);
    queryDrinkAPI(alphabetParam);

    // console.log("weather test", queryDrinkAPI(cityParam));
    // console.log("weather", weather);
  }, []);

  return <div>{/* <h1>{letter.</h1> */}</div>;
}
