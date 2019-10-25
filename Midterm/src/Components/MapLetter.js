import React from "react";

export default function MapLetter([alphabet]) {
  for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet);
    if (alphabet[i] === "a") {
      return <p>a</p>;
    } else if (alphabet[i] === "b") {
      return <h2 style={{ color: "#23395B" }}>b</h2>;
    } else {
      return <p></p>;
    }
  }
}
