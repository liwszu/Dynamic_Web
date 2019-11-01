import React from "react";
import { Link } from "react-router-dom";

const MapDrinks = props => (
  <div className="containerDrink">
    <div className="row">
      {props.drinkArray.map(drinkDetails => {
        return (
          <div key={drinkDetails.idDrink}>
            <div className="drinkBox">
              <h5 className="drinkTitle">{drinkDetails.strDrink}</h5>
              <img
                className="drinkBoxImg"
                src={drinkDetails.strDrinkThumb}
                alt={drinkDetails.strDrink}
              />
              <div className="column">
                <p className="drinkSubtitle">
                  {" "}
                  <span>{drinkDetails.strCategory}</span>
                </p>

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
          </div>
        );
      })}
    </div>
  </div>
);
export default MapDrinks;
