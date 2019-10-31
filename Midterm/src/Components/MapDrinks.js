import React from "react";
import { Link } from "react-router-dom";

const MapDrinks = props => (
  <div className="container">
    <div className="row">
      {props.drinkArray.map(drinkDetails => {
        return (
          <div
            key={drinkDetails.idDrink}
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="drinkBox">
              <img
                className="drinkBoxImg"
                src={drinkDetails.strDrinkThumb}
                alt={drinkDetails.strDrink}
              />
              <div className="drinkText">
                <h5 className="drinkTitle">{drinkDetails.strDrink}</h5>
                <p className="drinkSubtitle">
                  {" "}
                  Type of Drink: <span>{drinkDetails.strCategory}</span>
                </p>
              </div>
              <button className="drinkButton">
                <Link
                  to={{
                    pathname: `/drinkDetails/${drinkDetails.idDrink}`,
                    state: { drinkDetails: drinkDetails.idDrink }
                  }}
                >
                  View Drink Details
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
export default MapDrinks;
