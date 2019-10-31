// import React from "react";
// import { Link } from "react-router-dom";

// class DrinkDetails extends React.Component {
//   state = {
//     activeDrink: []
//   };
//   componentDidMount = async () => {
//     const idDrink = this.props.location.state.drinkDetails;
//     const getIdRandomAPI = await fetch(
//       `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
//     );

//     const rez = await getIdRandomAPI.json();
//     this.setState({ activeDrink: rez.drinks[0] });
//     console.log(this.state.activeDrink);
//   };

//   render() {
//     const drink = this.state.activeDrink;
//     console.log(this.props);
//     return (
//       <div className="container">
//         {this.state.activeDrink.length !== 0 && (
//           <div className="activeDrink">
//             <header className="App-header">
//               <h1
//                 className="App-title"
//                 style={{ marginBottom: "2rem", textAlign: "center" }}
//               >
//                 {drink.strDrink}
//               </h1>
//             </header>
//             <img
//               className="activeDrinkImg"
//               style={{ marginBottom: "2rem", justifyContent: "center" }}
//               src={drink.strDrinkThumb}
//               alt="drink "
//             />
//             <p>{drink.strInstructions}</p>
//             <p>
//               {drink.strIngredient1}
//               {drink.strMeasure1}
//             </p>
//             <p>
//               {drink.strIngredient2}
//               {drink.strMeasure2}
//             </p>
//             <p>
//               {drink.strIngredient3}
//               {drink.strMeasure3}
//             </p>
//             <p>
//               {drink.strIngredient4}
//               {drink.strMeasure4}
//             </p>
//             <p>
//               {drink.strIngredient5}
//               {drink.strMeasure5}
//             </p>
//             <p>
//               {drink.strIngredient6}
//               {drink.strMeasure6}
//             </p>
//             <p>
//               {drink.strIngredient7}
//               {drink.strMeasure7}
//             </p>
//             <p>
//               {drink.strIngredient8}
//               {drink.strMeasure8}
//             </p>
//             <p>
//               {drink.strIngredient9}
//               {drink.strMeasure9}
//             </p>
//             <p>
//               {drink.strIngredient10}
//               {drink.strMeasure10}
//             </p>
//             <p>
//               {drink.strIngredient11}
//               {drink.strMeasure11}
//             </p>
//             <p>
//               {drink.strIngredient12}
//               {drink.strMeasure12}
//             </p>
//             <p>
//               {drink.strIngredient13}
//               {drink.strMeasure13}
//             </p>
//             <p>
//               {drink.strIngredient14}
//               {drink.strMeasure14}
//             </p>
//             <p>
//               {drink.strIngredient15}
//               {drink.strMeasure15}
//             </p>
//             <button
//               className="activeDrinkButton"
//               style={{ marginBottom: "2rem" }}
//             >
//               <Link to="/">Go Home</Link>
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// export default DrinkDetails;
