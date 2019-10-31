// import React from "react";
// import { Link } from "react-router-dom";

// const MapRandomDrink = props => (
//   <div className="container">
//     <div className="row">
//       {props.randomDrinkArray.map(randomDrinkDetails => {
//         return (
//           <div
//             key={randomDrinkDetails.idDrink}
//             className="col-md-4"
//             style={{ marginBottom: "2rem" }}
//           >
//             <div className="drinkBox">
//               <img
//                 className="drinkBoxImg"
//                 src={randomDrinkDetails.strDrinkThumb}
//                 alt={randomDrinkDetails.strDrink}
//               />
//               <div className="drinkText">
//                 <h5 className="drinkTitle">{randomDrinkDetails.strDrink}</h5>
//                 <p className="drinkSubtitle">
//                   {" "}
//                   Type of Drink: <span>{randomDrinkDetails.strCategory}</span>
//                 </p>
//               </div>
//               <button className="drinkButton">
//                 <Link
//                   to={{
//                     pathname: `/drinkDetails/${randomDrinkDetails.idDrink}`,
//                     state: { randomDrinkDetails: randomDrinkDetails.idDrink }
//                   }}
//                 >
//                   View Drink Details
//                 </Link>
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// );
// export default MapRandomDrink;
